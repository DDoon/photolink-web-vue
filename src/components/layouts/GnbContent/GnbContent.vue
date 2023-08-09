<script lang="ts" setup>
defineOptions({
  name: "GnbContent",
});
</script>

<template>
  <a-layout-content
    :style="{
      padding: '0 24px 24px 24px',
      background: '#fff',
    }"
  >
    <router-view />
  </a-layout-content>
</template>
