<script lang="ts" setup>
import { type CheckboxProps, checkboxProps } from "ant-design-vue/es/checkbox";

defineOptions({
  name: "Checkbox",
});

const props: CheckboxProps = defineProps(checkboxProps());
</script>
<template>
  <a-checkbox v-bind="props">
    <slot></slot>
  </a-checkbox>
</template>
