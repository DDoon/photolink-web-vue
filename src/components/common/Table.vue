<script lang="ts" setup>
defineOptions({
  name: "Table",
});

const props = defineProps({
  columns: Array,
  data: Array,
});

const { columns, data } = props;
</script>
<template>
  <a-table :columns="columns" :data-source="data"> </a-table>
</template>
