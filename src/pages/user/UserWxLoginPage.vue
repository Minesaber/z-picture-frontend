<template>
  <div id="UserWxLoginPage">
    <a-card class="wx-login-card">
      <template #title>
        <WechatOutlined />
      </template>
      <div class="code-container">
        <span class="code-label">扫码关注，输入客户端标识码即可登录</span>
        <div class="desc">
          <a style="color: #aaa">
            <a-popover placement="right">
              <template #title>
                <span style="color: #aaa; font-weight: 100"
                  >仅关联openid，每个微信在不同公众号的openid不同</span
                >
              </template>
              <InfoCircleOutlined />
              首次关注将自动注册
            </a-popover>
          </a>
        </div>
        <span class="code-value">{{ cIdCode }}</span>
      </div>
      <div class="qr-container">
        <a-qrcode
          :error-level="'H'"
          :value="qr"
          :status="qrStatus"
          :size="150"
          style="margin: auto; border: #aaa dotted 1px"
        />
      </div>
      <div class="status-message">
        {{ statusMessage }}
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { message } from 'ant-design-vue'
import { WechatOutlined } from '@ant-design/icons-vue'
import { refreshUsingGet, resendCodeUsingGet } from '@/api/wxLoginController.ts'
import { BASE_URL } from '@/constants/backend.ts'
import { healthUsingGet } from '@/api/mainController.ts'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
import router from '@/router'

const qr = ref<string>('http://weixin.qq.com/r/mp/bhHYwKLExv_5reaj90R8')
const cIdCode = ref<string>('正在加载标识码 ( •̀ ω •́ )✧')
let eventSource: EventSource | null = null
const qrStatus = ref<'active' | 'loading' | 'expired' | 'scanned'>('active')
const statusMessage = ref<string>('等待输入')

/**
 * 建立sse连接
 */
const setupSSE = async () => {
  eventSource = new EventSource(BASE_URL + '/api/wx/subscribe')
  eventSource.onerror = () => {
    message.error('SSE 连接失败')
    eventSource?.close()
  }
  eventSource.onmessage = async (event) => {
    if (event.data === 'success-login') {
      statusMessage.value = '载入数据中，请稍后'
      await router.push({
        path: `/`,
      })
      message.success('登录成功')
    }
  }
}

/**
 * 再次获取标识码
 */
const fetchLoginData = async () => {
  try {
    // 成功返回success-cIdCode?xxx，失败则返回fail-fetch
    const res = await resendCodeUsingGet()
    if (res.data.code === 0 && res.data.data) {
      const result = resultAnalysis(res.data.data)
      if (result === 'fail') {
        message.warn('获取标识码失败')
        message.warn('正在尝试重新加载标识码...')
        await refreshLoginData()
      } else {
        message.success('标识码已为最新')
        cIdCode.value = result
      }
    } else {
      message.error('请求标识码失败')
    }
  } catch (error) {
    message.error('请求异常' + error.message)
  }
}

/**
 * 基于已有的sse刷新标识码，如果仍失败则重新建立sse
 */
const refreshLoginData = async () => {
  try {
    const res = refreshUsingGet()
    if (res.data.code === 0 && res.data.data) {
      if (res.data.data.reconnect === false) {
        cIdCode.value = res.data.data.cIdCode
        message.success('刷新成功')
      } else {
        message.warn('刷新失败，正在尝试重新建立连接...')
        setupSSE()
        await fetchLoginData()
      }
    } else {
      message.error('刷新请求失败')
    }
  } catch (error) {
    message.error('请求异常' + error.message)
  } finally {
  }
}

const resultAnalysis = (str: any) => {
  if (str.startsWith('success-')) {
    return str.split('-')[1]?.split('?')[1] || ''
  } else {
    return 'fail'
  }
}

onMounted(async () => {
  await healthUsingGet()
  await setupSSE()
  setTimeout(async () => {
    await fetchLoginData()
  }, 1000)
})

onUnmounted(() => {
  eventSource?.close()
})
</script>

<style scoped>
#UserWxLoginPage {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.wx-login-card {
  width: 400px;
  text-align: center;
}

.qr-container {
  margin: 0 auto 16px;
}

.code-container {
  margin-bottom: 16px;
  font-size: 1.2em;
}

.code-label {
  font-weight: bold;
  margin-right: 8px;
}

.status-message {
  color: #1890ff;
  font-size: 1em;
}

.desc {
  text-align: center;
  color: #aaa;
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
