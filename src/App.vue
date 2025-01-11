<template>
  <a-config-provider :locale="zhCN" :getPopupContainer="getPopupContainer">
    <div id="app">
      <BasicLayout />
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

// 配置弹出框的容器
const getPopupContainer = (el: HTMLElement, dialogContext: any) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap()
  } else {
    return document.body
  }
}
</script>

<style scoped></style>
