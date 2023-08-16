<script lang="ts" setup>
import { buttonProps } from "ant-design-vue/es/button/Button";
import { ButtonProps } from "ant-design-vue/es/button/buttonTypes";

defineOptions({
  name: "Button",
});

const props: ButtonProps = defineProps(buttonProps());
</script>
<template>
  <a-button v-bind="props">
    <slot></slot>
  </a-button>
</template>
