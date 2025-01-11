import router from '@/router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import { message } from 'ant-design-vue'

let firstFetchLoginUser = true

/**
 * 全局权限校验
 */
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore()
  let loginUser = loginUserStore.loginUser
  if (firstFetchLoginUser) {
    firstFetchLoginUser = false
    // 确保后端返回信息后，再进行权限校验
    await loginUserStore.fetchLoginUser()
    loginUser = loginUserStore.loginUser
  }
  const toUrl = to.fullPath
  // todo 对于未登录的用户：必须登录才允许访问
  // todo 对于已经登录的普通用户：访问管理页面时，保留无权限的提示，并返回到前页或首页
  if (toUrl.startsWith('/admin')) {
    if (!loginUser || loginUser.userRole !== 'admin') {
      message.error('无管理权限')
      next(`/user/login?redirect=${to.fullPath}`)
    }
  }
  next()
})
