<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue';
import { CaretBottom } from '@element-plus/icons-vue';
import { KnowledgeTag } from '@/types/index';

const maxHeight = ref(142);
const wrapperHeight = ref(maxHeight.value);
const wrapperRef = ref();

const props = defineProps({
  modelValue: {
    type: Number,
    default: NaN,
  },
});

const emits = defineEmits<{(e: 'change', val: number): void;
  (e: 'update:modelValue', val: number): void;
}>();

const currentTag = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val);
    emits('change', val);
  },
});

const isExpand = ref(false);
const toExpand = () => {
  isExpand.value = true;
  maxHeight.value = wrapperHeight.value;
};

const tagList = ref<KnowledgeTag[]>([]);

const getTagList = async () => {
  // TODO 发请求获取标签列表
  const result: KnowledgeTag[] = [];
  for (let i = 0; i < Math.floor(Math.random() * 50 + 30); i += 1) {
    result.push({
      id: i + 1,
      total: Math.floor(Math.random() * 3000 + 1),
      name: '标签',
    });
  }
  tagList.value = result;
  await nextTick();
  const height = wrapperRef.value?.clientHeight;
  if (height && height > 180) {
    isExpand.value = false;
    wrapperHeight.value = height;
  } else {
    isExpand.value = true;
  }
  console.log(wrapperRef.value?.clientHeight);
};

const currentTagChange = (id: KnowledgeTag['id']) => {
  currentTag.value = id;
};

getTagList();
</script>

<template>
  <div class="filter-wrapper" v-if="tagList.length">
    <div ref="wrapperRef" style="padding: 12px">
      <div class="tag filter-item">
        <div class="label">标签过滤:</div>
        <div class="tag-group edit-area flex">
          <div
            role="button"
            tabindex="0"
            :class="[
              'tag-item',
              'flex-vertical-center',
              'is-plain',
              'is-transparent',
              `color-group-${index % 12 + 1}`,
              { 'is-active': currentTag === item.id }
            ]"
            v-for="(item, index) in tagList"
            :key="item.id"
            @click="currentTagChange(item.id)"
            @keydown="currentTagChange(item.id)"
          >
            <span class="tag-name ellipsis">{{ item.name }}</span>
            <span>({{ item.total > 99999 ? '99999+' : item.total }})</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isExpand" class="expend-wrapper flex-center" @click="toExpand">
      <el-icon size="18">
        <CaretBottom />
      </el-icon>
      <span>查看更多</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-wrapper {
  position: relative;
  max-height: calc(1px * v-bind(maxHeight));
  overflow: hidden;
  font-size: 14px;
  transition: all .3s;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  .filter-item {
    .label {
      margin-bottom: 2px;
      line-height: 28px;
      font-weight: 700;
    }
    .edit-area {
      padding-left: 20px;
    }
  }
  .filter-item + .filter-item {
    margin-top: 20px;
  }
  .expend-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    color: #409eff;
    background-color: #fff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    :deep(.el-icon) {
      margin: -3px 2px 0 0;
    }
  }
}
.tag-group {
  flex-wrap: wrap;
  gap: 12px;
  .tag-item {
    min-width: 30px;
    height: 28px;
    padding: 0 8px;
    line-height: 28px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid;
    transition: all .3s;
    cursor: pointer;
    .tag-name {
      display: inline-block;
      max-width: 120px;
    }
  }
}
</style>
