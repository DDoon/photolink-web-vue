<script lang="ts" setup>
defineOptions({
  name: "Input",
});

const props = defineProps();
</script>
<template>
  <a-input v-bind="props" />
</template>
