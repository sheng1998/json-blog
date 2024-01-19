<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { KnowledgeTag } from '@/types/index';
import FilterWrapper from './FilterWrapper.vue';

const route = useRoute();
const router = useRouter();

const currentTag = ref(Number(route.query.tag));
const onTagChange = (tag: KnowledgeTag['id']) => {
  console.log(tag);
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
  <FilterWrapper v-model="currentTag" class="tag-filter-wrapper" @change="onTagChange" />
  <div class="knowledge-list">
    <router-link
      :to="{ name: 'knowledge-details', params: { id: item } }"
      class="knowledge-item"
      v-for="item in 20"
      :key="item"
    >
      <div class="title">哈哈哈哈哈</div>
      <div class="flex">
        <div class="description">
          hdjdhjhdjdhj哼哼哼哼哼哼
        </div>
        <img
          v-if="Math.random() > 0.5"
          class="picture"
          src="https://th.bing.com/th/id/OIP.2rQ25qnSMQHXGcHz3Rp2pAHaEo?w=294&h=183&c=7&r=0&o=5&pid=1.7" alt="">
      </div>
      <div class="mate flex-vertical-center">
        <div class="nickname mate-item">小庄</div>
        <div class="time mate-item">2024-01-19 21:29</div>
        <div class="comments mate-item flex-vertical-center">
          <span class="iconfont icon-comment"></span>
          <span>999+</span>
        </div>
        <div class="like mate-item flex-vertical-center">
          <span class="iconfont icon-like"></span>
          <span>998</span>
        </div>
        <div class="read mate-item flex-vertical-center">
          <span class="iconfont icon-read"></span>
          <span>9999+</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tag-filter-wrapper + .knowledge-list {
  margin-top: var(--gap-size);
}
.knowledge-list {
  width: 100%;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  .knowledge-item {
    display: inline-block;
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    background-color: #f8f8fa;
    text-decoration: none;
    cursor: pointer;
    .title {
      margin-bottom: 12px;
      line-height: 22px;
      color: #333;
      font-weight: 700;
    }
    .description {
      flex: 1;
      font-size: 14px;
      color: #999;
    }
    .picture {
      flex-shrink: 0;
      margin-left: 24px;
      border-radius: 4px;
      max-width: 120px;
      max-height: 80px;
    }
    .mate {
      margin-top: 12px;
      line-height: 20px;
      color: #999;
      font-size: 12px;
      .iconfont {
        margin-right: 3px;
        font-size: 14px;
      }
    }
    .mate-item + .mate-item {
      margin-left: 12px;
    }
  }
  .knowledge-item + .knowledge-item {
    margin-top: 12px;
  }
}
</style>
