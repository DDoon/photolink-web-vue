<script lang="ts" setup>
import { type ModalProps, modalProps } from "ant-design-vue/es/modal/Modal";

defineOptions({
  name: "Modal",
});

const props = defineProps({
  ...modalProps(),
  getContainer: {
    type: Function,
    default: () => document.body,
  },
}) as ModalProps;
</script>

<template>
  <Teleport :to="getContainer()">
    <a-modal v-bind="props">
      <template #title>
        <slot name="title"></slot>
      </template>

      <template #footer>
        <slot name="footer"></slot>
      </template>
    </a-modal>
  </Teleport>
</template>
