import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * 存储用户登录信息的状态
 */
export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    userName: '未登录',
  })

  /**
   * 设置登录用户
   * @param newLoginUser 登录用户
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  /**
   * 获取用户信息
   */
  async function fetchLoginUser() {
    // todo 后端接口完善后，补充相关代码
    // const res = await getCurrentUser()
    // if (res.data.code === 0 && res.data.data) {
    // loginUser.value = res.data.data
    // }

    // 模拟用户登录，3秒后更新状态
    setTimeout(() => {
      loginUser.value = { userName: '小周', id: 1 }
    }, 3000)
  }

  /**
   * 返回
   */
  return { loginUser, setLoginUser, fetchLoginUser }
})
