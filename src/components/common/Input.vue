<script lang="ts" setup>
import inputProps, { InputProps } from "ant-design-vue/es/input/inputProps";
import {
  type FormItemProps,
  formItemProps,
} from "ant-design-vue/es/form/FormItem";

defineOptions({
  name: "Input",
});

const props = defineProps({
  ...formItemProps(),
  ...inputProps(),
});

const formItemPropsVal: FormItemProps = props;
const inputPropsVal: InputProps = props;
</script>
<template>
  <a-form-item v-bind="formItemPropsVal">
    <template v-if="props.type === 'password'">
      <a-input-password v-bind="inputPropsVal">
        <template #prefix>
          <slot name="icon"></slot>
        </template>
      </a-input-password>
    </template>

    <template v-else>
      <a-input v-bind="inputPropsVal">
        <template #prefix>
          <slot name="icon"></slot>
        </template>
      </a-input>
    </template>
  </a-form-item>
</template>
