<template>
  <div class="login-switcher">
    <a-segmented v-model:value="selectedLogin" :options="options" @change="handleSegmentChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const selectedLogin = ref('custom')
const options = [
  { label: '账号登录', value: 'custom' },
  { label: '微信登录', value: 'wechat' },
]

const router = useRouter()

router.afterEach((to) => {
  if (to.path.startsWith('/user/login')) {
    selectedLogin.value = 'custom'
  } else {
    selectedLogin.value = 'wechat'
  }
})
const handleSegmentChange = (value: string) => {
  if (value === 'custom') {
    router.push('/user/login')
  } else if (value === 'wechat') {
    router.push('/userwx/login')
  }
}
</script>

<style scoped>
.login-switcher {
  margin-bottom: 16px;
  text-align: center;
}
</style>
