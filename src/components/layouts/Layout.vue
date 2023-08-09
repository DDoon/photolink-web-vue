<script setup lang="ts">
import GnbContent from "./GnbContent/GnbContent.vue";
import GnbSidebar from "./GnbSidebar/GnbSidebar.vue";
import GnbHeader from "./GnbHeader/GnbHeader.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <a-layout>
    <GnbSidebar />
    <a-layout>
      <GnbHeader />
      <GnbContent />
    </a-layout>
  </a-layout>
</template>
