<script lang="ts" setup>
import { ref } from 'vue';

const entrance = ref([
  {
    title: '技术积累',
    url: '/knowledge',
    description: '广识未必皆当，而思之自得者真；泛讲未必吻合，而习之纯熟者妙。',
  },
  {
    title: '网页推荐',
    url: '',
    description: '天不生无用之人，地不长无用之草。',
  },
  {
    title: '传输助手',
    url: '',
    description: '图片文件轻松互传，支持查看历史传输记录。',
  },
]);
</script>

<template>
  <div class="entrance-wrapper flex-horizontal-center">
    <router-link
      v-for="(item, index) in entrance"
      :class="['entrance', `style-${index % 8 + 1}`]"
      :key="item.title"
      :to="item.url"
    >
      <div class="title ellipsis">{{ item.title  }}</div>
      <div class="description">{{  item.description  }}</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.entrance-wrapper {
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  .entrance {
    flex-shrink: 0;
    height: 150px;
    width: 300px;
    padding: 12px;
    border-radius: 20px;
    text-decoration: none;
    .title {
      padding: 0 30px;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
    }
    .description {
      display: -webkit-box;
      margin-top: 20px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .entrance.style-1 {
    color: #bfdb38;
    background-color: rgba($color: #61a3ba, $alpha: .5);
  }
  .entrance.style-2 {
    color: #1aacac;
    background-color: rgba($color: #fffb73, $alpha: .5);
  }
  .entrance.style-3 {
    color: #f94c10;
    background-color: rgba($color: #facbea, $alpha: .5);
  }
  .entrance.style-4 {
    color: #d2e0fb;
    background-color: rgba($color: #ff9800, $alpha: .5);
  }
  .entrance.style-5 {
    color: #534340;
    background-color: rgba($color: #5fd068, $alpha: .5);
  }
  .entrance.style-6 {
    color: #ff8400;
    background-color: rgba($color: #454545, $alpha: .5);
  }
  .entrance.style-7 {
    color: #7a3e65;
    background-color: rgba($color: #ffacac, $alpha: .5);
  }
  .entrance.style-8 {
    color: #864af9;
    background-color: rgba($color: #c3e2c2, $alpha: .5);
  }
}
</style>
