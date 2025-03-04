import axios from 'axios'
import router from '@/router'

const API_URL = import.meta.env.VITE_API_URL

// 创建 Axios 实例
const myAxios = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  withCredentials: true,
})

export default myAxios

// 全局请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// 全局响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes('user/get/login') &&
        !window.location.pathname.includes('/user/login')
      ) {
        setTimeout(() => {
          router.push(`/user/login?redirect=${window.location.href}`)
        }, 1)
      }
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)
