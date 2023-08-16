<script lang="ts" setup>
import {  type FormItemProps, formItemProps } from 'ant-design-vue/es/form/FormItem';



defineOptions({
  name: "FormItem",
});

const props: FormItemProps = defineProps(formItemProps());

</script>

<template>
  <a-form-item v-bind="props">
    <slot></slot>
  </a-form-item>
</template>
