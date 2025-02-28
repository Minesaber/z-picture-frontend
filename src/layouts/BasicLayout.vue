<template>
  <div v-if="!isBgLoaded" class="loading-container">
    <a-spin :indicator="indicator" />
  </div>

  <div v-else id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout>
        <GlobalSider class="sider" />
        <a-layout-content :class="['content', { 'bg-container': isLoginPage }]">
          <LoginTypeSegment />
          <router-view />
        </a-layout-content>
      </a-layout>
      <a-layout-footer class="footer">
        <router-link to="/" style="color: grey">ZPicture by Minesaber</router-link>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import GlobalHeader from '@/layouts/GlobalHeader.vue'
import GlobalSider from '@/layouts/GlobalSider.vue'
import LoginTypeSegment from '@/pages/user/LoginTypeSegment.vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '24px',
  },
  spin: true,
})
const isBgLoaded = ref(false)

const route = useRoute()
const isLoginPage = computed(() => route.path === '/user/login' || route.path === '/userwx/login')

onMounted(() => {
  const bgImg = new Image()
  bgImg.src = 'https://s3.uuu.ovh/imgs/2025/02/27/ccd8602dd05b3d5e.png'
  bgImg.onload = () => {
    isBgLoaded.value = true
  }
})
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#basicLayout .header {
  padding-inline: 20px;
  background: #fff;
  color: unset;
  margin-bottom: 1px;
}

#basicLayout .sider {
  background: #fff;
  border-right: 0.5px solid #eee;
  padding-top: 20px;
}

#basicLayout :deep(.ant-menu-root) {
  border-bottom: none !important;
  border-inline-end: none !important;
}

#basicLayout .content {
  padding: 28px;
  background: #fff;
  margin-bottom: 28px;
}

#basicLayout .bg-container {
  background-image: url('https://s3.uuu.ovh/imgs/2025/02/27/ccd8602dd05b3d5e.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65%;
}

#basicLayout .footer {
  background: #fafafa;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
