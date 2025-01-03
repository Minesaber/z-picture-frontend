<template>
  <div id="basicLayout">
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
      <a-layout style="height: 100vh">
        <a-layout-header class="header">
          <GlobalHeader />
        </a-layout-header>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
        <a-layout-footer class="footer">
          <a href="https://www.github.com/minesaber" target="_blank">ZPicture by Minesaber</a>
        </a-layout-footer>
      </a-layout>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/layouts/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  background: white;
  color: unset;
  margin-bottom: 16px;
}

#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #efefef, #fff);
  margin-bottom: 28px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
