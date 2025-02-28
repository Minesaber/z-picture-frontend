import router from '@/router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import { message } from 'ant-design-vue'

let firstFetchLoginUser = true

/**
 * 全局权限校验（导航守卫，在每次路由跳转之前执行）
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
  // 管理页面
  if (toUrl.startsWith('/admin')) {
    if (!loginUser || loginUser.userRole !== 'admin') {
      message.error('无管理权限')
      return next(`/user/login?redirect=${to.fullPath}`)
    }
  } else if (
    // 登录与注册页面
    toUrl.startsWith('/user/login') ||
    toUrl.startsWith('/userwx/login') ||
    toUrl.startsWith('/user/register')
  ) {
    if (loginUser.id) {
      message.info('请先退出登录')
      return next(`/`)
    } else {
      // 暂只开放微信注册
      if (toUrl.startsWith('/user/register')) {
        message.warn('暂只开放微信注册，可登录后绑定自定义账号')
        return next(`/user/login`)
      }
    }
  } else {
    // 其他页面
    if (!loginUser.id) {
      message.info('未登录')
      return next(`/user/login?redirect=${to.fullPath}`)
    }
  }
  next()
})
