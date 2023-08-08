<script lang="ts" setup>
defineOptions({
  name: "GnbContent",
});
</script>

<template>
  <a-layout-content
    :style="{
      padding: '24px',
      background: '#fff',
    }"
  >
    <router-view />
  </a-layout-content>
</template>
