<script lang="ts" setup>
import { avatarProps, type AvatarProps } from "ant-design-vue/es/avatar/Avatar";

defineOptions({
  name: "Avatar",
});

const props: AvatarProps = defineProps(avatarProps());
</script>
<template>
  <a-avatar v-bind="props">
    <slot></slot>
  </a-avatar>
</template>
