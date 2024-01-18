<script lang="ts" setup>
import NavBar from '@/layout/NavBar.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const search = (keyword: string) => {
  // 疑似 BUG (只有在这里深拷贝才行，否则 replace 无法正常清空某一 query)
  const query = JSON.parse(JSON.stringify(route.query));
  if (keyword) {
    if (route.name !== 'knowledge') {
      router.push({ name: 'knowledge', query: { keyword } });
    } else {
      router.replace({ query: { ...query, keyword } });
    }
  } else {
    Reflect.deleteProperty(query, 'keyword');
    router.replace({ query: { ...query } });
  }
};
</script>

<template>
  <NavBar @search="search" />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: var(--navbar-height);
}
</style>
