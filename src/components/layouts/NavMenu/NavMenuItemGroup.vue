<script lang="ts" setup>
defineOptions({
  name: "NavMenuItemGroup",
});

const { title } = defineProps({
  title: String,
});
</script>
<template>
  <a-menu-item-group :title="title">
    <slot></slot>
  </a-menu-item-group>
</template>
