<template>
  <div id="userLoginPage">
    <h2 class="title" style="font-family: 黑体, serif">用户登录</h2>
    <div class="desc">ZPicture</div>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="handleSubmit">
      <a-form-item name="userAccount" label="账号">
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号" />
      </a-form-item>

      <a-form-item name="userPassword" label="密码">
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
      </a-form-item>

      <div class="tips">
        没有账号？
        <RouterLink to="/user/register">
          <del class="bold-strike">去注册</del>
        </RouterLink>
      </div>

      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { userLoginUsingPost } from '@/api/userController.ts'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import { message } from 'ant-design-vue'
import router from '@/router'
import { useRoute } from 'vue-router'

// 表单状态
const formState = reactive({
  userAccount: '',
  userPassword: '',
})

const loginUserStore = useLoginUserStore()
const route = useRoute()

// 提交表单
const handleSubmit = async () => {
  try {
    const res = await userLoginUsingPost(formState)
    if (res.data.code === 0 && res.data.data) {
      await loginUserStore.fetchLoginUser()
      message.success('登录成功')
      const redirect = route.query.redirect as string
      if (redirect) {
        await router.push({ path: redirect, replace: true })
      } else {
        await router.push({ path: '/', replace: true })
      }
    } else {
      message.error('登录失败，' + res.data.message)
    }
  } catch (e: any) {
    message.error('异常，' + e.message)
  }
}
</script>

<style scoped>
#userLoginPage {
  max-width: 360px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

.desc {
  text-align: center;
  color: #aaa;
  margin-bottom: 16px;
}

.tips {
  color: #aaa;
  text-align: right;
  font-size: 13px;
  margin-bottom: 16px;
}

.bold-strike {
  text-decoration: line-through;
  text-decoration-thickness: 3px;
  text-decoration-color: red;
}
</style>
