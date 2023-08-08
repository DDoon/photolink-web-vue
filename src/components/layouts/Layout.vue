<script setup lang="ts">
import GnbContent from "./GnbContent/GnbContent.vue";
import GnbSidebar from "./GnbSidebar/GnbSidebar.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <a-layout>
    <GnbSidebar />
    <GnbContent />
  </a-layout>
</template>
