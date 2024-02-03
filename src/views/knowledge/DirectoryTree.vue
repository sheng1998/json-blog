<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const treeRef = ref();
const route = useRoute();
const router = useRouter();

const currentDir = ref(Number(route.query.dir));
const data = ref([
  {
    id: 1,
    label: '前端基础知识',
    children: [
      {
        id: 2,
        label: 'JS基础',
        children: [
          {
            id: 3,
            label: '数组相关',
          },
          {
            id: 4,
            label: '字符串相关',
          },
          {
            id: 5,
            label: 'Math对象相关',
          },
        ],
      },
      {
        id: 6,
        label: 'Vue基础',
        children: [
          {
            id: 7,
            label: 'ref',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: '常用工具函数',
    children: [
      {
        id: 9,
        label: '时间处理函数',
      },
      {
        id: 10,
        label: '随机生成相关',
      },
      {
        id: 11,
        label: '文件、文件处理',
      },
    ],
  },
]);

const clickAll = () => {
  treeRef.value?.setCurrentKey(null);
};

const currentChange = (value: (typeof data.value)[0]) => {
  currentDir.value = value?.id || NaN;
  // 疑似 BUG (只有在这里深拷贝才行，否则 replace 无法正常清空某一 query)
  const query = JSON.parse(JSON.stringify(route.query));
  if (currentDir.value) {
    router.replace({ query: { ...query, dir: currentDir.value } });
  } else {
    Reflect.deleteProperty(query, 'dir');
    router.replace({ query: { ...query } });
  }
};
</script>

<template>
  <el-scrollbar class="directory-tree">
    <div
      class="all flex-vertical-center"
      :class="{ 'is-current': Number.isNaN(currentDir) }"
      @click="clickAll"
    >
      <span class="label ellipsis">所有文章</span>
      <span class="total">&nbsp;({{ 999999 }})</span>
    </div>
    <el-tree
      ref="treeRef"
      :data="data"
      node-key="id"
      default-expand-all
      @current-change="currentChange"
    >
      <template #default="{ node, data }">
        <div class="custom-tree-node flex-vertical-center">
          <span class="label ellipsis">{{ node.label }}</span>
          <span class="total" :data="data">&nbsp;({{ 999 }})</span>
        </div>
      </template>
    </el-tree>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.directory-tree {
  min-height: 300px;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  color: #606266;
  background-color: #fff;
  .all {
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
    &.is-current {
      color: var(--el-color-primary);
      background-color: #ecf5ff;
    }
  }
  :deep(.el-tree) {
    background-color: transparent;
    .is-focusable .el-tree-node__content {
      background-color: unset;
    }
    .is-current .el-tree-node__content {
      color: var(--el-color-primary);
      background-color: #ecf5ff;
    }
    .el-tree-node__content {
      height: 30px;
      line-height: 30px;
    }
    .el-tree-node__content:hover {
      color: var(--el-color-primary);
    }
  }
  .label {
    display: inline-block;
    max-width: 160px;
  }
  .total {
    color: #a0cfff;
  }
}
</style>
