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
    <el-scrollbar class="left" v-if="leftVisible">
      <DirectoryTree />
    </el-scrollbar>
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
  .left {
    position: sticky;
    top: calc(var(--navbar-height) + var(--gap-size));
    flex-shrink: 0;
    width: 300px;
    height: calc(100vh - var(--navbar-height) - 2 * var(--gap-size));
    margin-right: var(--gap-size);
    padding: 12px;
    border-radius: 4px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }
  .main {
    flex: 1;
    max-width: 900px;
    transition: $transition;
  }
}
</style>
