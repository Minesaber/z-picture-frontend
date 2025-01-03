import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建 Axios 实例
const myAxios = axios.create({
  // baseURL默认前端地址，如使用默认配置则：
  // 配置vite.config.js中proxy后，所有请求先经过代理判断
  // 需要走代理的请求经Vite代理服务器，转发给后端以避免跨域问题
  baseURL: 'http://localhost:1288',
  timeout: 60000,
  withCredentials: true,
})

export default myAxios

// 全局请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// 全局响应拦截器
axios.interceptors.response.use(
  function (response) {
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes('user/get/login') &&
        !window.location.pathname.includes('/user/login')
      ) {
        message.warning('请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)
