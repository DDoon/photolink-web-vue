<script lang="ts" setup>
import { cardProps, type CardProps } from "ant-design-vue/es/card/Card";

defineOptions({
  name: "Card",
});

const props: CardProps = defineProps(cardProps());
</script>
<template>
  <a-card v-bind="props">
    <slot></slot>
  </a-card>
</template>
