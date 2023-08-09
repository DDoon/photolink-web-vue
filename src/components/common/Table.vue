<script lang="ts" setup>
import { tableProps, type TableProps } from "ant-design-vue/es/table/Table";

defineOptions({
  name: "Table",
});

const props: TableProps = defineProps({ ...tableProps() });
const { dataSource } = props; // dataSource를 직접 추출
</script>
<template>
  <a-table v-bind="props" :data-source="dataSource"> </a-table>
</template>
