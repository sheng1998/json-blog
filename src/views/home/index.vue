<script lang="ts" setup>
import BackgroundImage from '@/components/BackgroundImage.vue';
import EntranceComponent from '@/views/entrance/index.vue';
import CommonFooter from '@/layout/CommonFooter.vue';
</script>

<template>
  <div class="home flex-center">
    <BackgroundImage />
    <EntranceComponent />
  </div>
  <CommonFooter />
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: calc(100vh - var(--navbar-height) - var(--footer-height));
  padding: 24px;
}
</style>
