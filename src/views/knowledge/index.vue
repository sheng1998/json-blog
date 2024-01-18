<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { KnowledgeTag } from '@/types/index';
import FilterWrapper from './FilterWrapper.vue';
import DirectoryTree from './DirectoryTree.vue';

const route = useRoute();
const router = useRouter();

const currentTag = ref(Number(route.query.tag));
const onTagChange = (tag: KnowledgeTag['id']) => {
  console.log(tag, currentTag.value);
  router.replace({ query: { ...route.query, tag } });
};

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
  <div class="knowledge-wrapper flex">
    <Transition name="enter-in-left">
      <el-scrollbar class="left" v-if="leftVisible">
        <div class="inner">
          <DirectoryTree />
        </div>
      </el-scrollbar>
    </Transition>
    <div class="main">
      <FilterWrapper v-model="currentTag" class="tag-filter-wrapper" @change="onTagChange" />
      <el-card class="knowledge-list">
        <div style="height: 200px; background-color: cadetblue;"></div>
        <div style="height: 200px; margin-top: 20px; background-color: pink;"></div>
        <div style="height: 200px; margin-top: 20px; background-color: orange;"></div>
        <div style="height: 200px; margin-top: 20px;background-color: honeydew;"></div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$transition: all .3s ease;

.knowledge-wrapper {
  align-items: flex-start;
  padding: var(--gap-size);
  .left {
    position: sticky;
    top: calc(var(--navbar-height) + var(--gap-size));
    flex-shrink: 0;
    height: calc(100vh - var(--navbar-height) - 2 * var(--gap-size));
    margin-right: var(--gap-size);
    border-radius: 4px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    .inner {
      width: 300px;
      padding: 12px;
    }
  }
  .main {
    flex: 1;
    min-width: 260px;
    transition: $transition;
    .tag-filter-wrapper + .knowledge-list {
      margin-top: var(--gap-size);
    }
  }
}

.enter-in-left-enter-active,
.enter-in-left-leave-active {
  transition: $transition;
}

.enter-in-left-enter-from,
.enter-in-left-leave-to {
  opacity: 0;
  width: 0 !important;
  margin-right: 0 !important;
}
</style>
