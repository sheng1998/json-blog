<script lang="ts" setup>
import NavBar from '@/layout/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: var(--navbar-height);
}
</style>
