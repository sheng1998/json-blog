<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import DirectoryTree from './DirectoryTree.vue';

const leftVisible = ref(false);

// 简单做一个节流
const lastHandleTime = 0;
const toggleShowLeft = () => {
  if (lastHandleTime + 100 > Date.now()) {
    toggleShowLeft();
    return;
  }
  if (window.innerWidth <= 800) {
    leftVisible.value = false;
  } else {
    leftVisible.value = true;
  }
};

window.addEventListener('resize', toggleShowLeft);
onUnmounted(() => {
  window.removeEventListener('resize', toggleShowLeft);
});

toggleShowLeft();
</script>

<template>
  <div class="knowledge-wrapper flex-center">
    <DirectoryTree class="directory-tree" v-if="leftVisible" />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$transition: all 3s ease;

.knowledge-wrapper {
  align-items: flex-start;
  gap: var(--gap-size);
  padding: var(--gap-size);
  .directory-tree {
    position: sticky;
    top: calc(var(--navbar-height) + var(--gap-size));
    flex-shrink: 0;
    width: 300px;
    height: calc(100vh - var(--navbar-height) - 2 * var(--gap-size));
  }
  .main {
    flex: 1;
    max-width: 900px;
    transition: $transition;
  }
}
</style>
