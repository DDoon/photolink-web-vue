<script lang="ts" setup>
import Card from "../../components/common/Card.vue";
defineOptions({
  name: "HomeMainPage",
});
</script>
<template>
  <Card :title="'오늘의 할일'">
    <span>asdasd</span>
    <div>asdasdasd</div>
  </Card>
  <Card :title="'방문자 현황'">
    <span>asdasd</span>
    <div>asdasdasd</div>
  </Card>
  <Card :title="'일자별 요약'"> </Card>
  <Card :title="'주문'"></Card>
  <Card :title="'매출'"></Card>
  <Card :title="'방문자'"></Card>
</template>
