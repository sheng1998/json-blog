<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
  total: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div
    role="button"
    tabindex="0"
    class="tag-item is-plain is-transparent flex-vertical-center"
  >
    <span class="tag-name ellipsis">{{ name }}</span>
    <span>({{ total > 99999 ? '99999+' : total }})</span>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
