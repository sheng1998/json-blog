<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const emits = defineEmits<{(e: 'search', keyword: string): void;
}>();

const keyword = ref('');

const initKeyword = () => {
  if (route.name !== 'knowledge') return;
  keyword.value = (route.query.keyword as string) || '';
};

const search = () => {
  emits('search', keyword.value.trim());
};

initKeyword();
</script>

<template>
  <nav class="navbar flex-vertical-center">
    <div class="left flex-vertical-center">
      <span class="iconfont icon-collapse"></span>
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/image/logo/logo-full.png" alt="" />
        </div>
      </router-link>
    </div>
    <el-input
      v-model="keyword"
      class="search-input"
      placeholder="请输入搜索关键字, 回车确认"
      @keydown.enter="search"
    />
    <div class="avatar flex-vertical-center"></div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  height: var(--navbar-height);
  width: 100%;
  padding: 2px 12px;
  background-image: linear-gradient(to right, #66abec,#77b1f0, #88bdf1, #9bcaf4, #b4d5f4);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  z-index: 1;
  .left {
    gap: 5px;
    .iconfont {
      display: none;
      font-size: 22px;
      color: #73767a;
      cursor: pointer;
    }
  }
  .logo {
    flex-shrink: 0;
    height: 32px;
    cursor: pointer;
    img {
      height: 100%;
    }
  }
  .search-input {
    width: 300px;
    min-width: 150px;
    margin: 0 12px;
  }
  .avatar {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
  }
}

@media screen and (max-width: 800px) {
  .navbar {
    .left .iconfont {
      display: inline-block;
    }
    .logo {
      width: 30px;
      overflow: hidden;
    }
  }
}
</style>
