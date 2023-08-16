<script lang="ts" setup>
import { formProps, type FormProps } from "ant-design-vue/es/form";

defineOptions({
  name: "Form",
});

const props: FormProps = defineProps(formProps());
</script>
<template>
  <a-form v-bind="props">
    <slot></slot>
  </a-form>
</template>
