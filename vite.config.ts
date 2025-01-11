import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 1280,
    // proxy配置示例
    // 配置proxy后，所有请求先经过判断，需要走代理的请求经由与前端同源的Vite代理服务器，转发给后端以避免跨域问题
    /*proxy: {
      '/api': 'http://localhost:1288',
    },*/
  },
})
