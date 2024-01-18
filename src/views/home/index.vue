<script lang="ts" setup>
import EntranceComponent from '@/views/entrance/index.vue';
import CommonFooter from '@/layout/CommonFooter.vue';
import BackgroundImage from './BackgroundImage.vue';
</script>

<template>
  <BackgroundImage />
  <div class="home">
    <div class="entrance flex-center">
      <EntranceComponent />
    </div>
    <CommonFooter />
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  .entrance {
    min-height: calc(100vh - var(--navbar-height) - var(--footer-height));
    padding: var(--gap-size);
  }
}
</style>
