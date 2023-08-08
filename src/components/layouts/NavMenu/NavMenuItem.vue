<script lang="ts" setup>
defineOptions({
  name: "NavMenuItem",
});

interface MenuItem {
  key: string;
  label: string;
  icon: string;
  path: string;
}

const { subKey, title, items } = defineProps({
  subKey: String,
  title: String,
  items: Array as () => MenuItem[],
});
</script>

<template>
  <a-sub-menu :key="subKey" :title="title">
    <router-link v-for="item in items" :key="item.key" :to="item.path">
      <a-menu-item>
        <component :is="item.icon" />
        <span>{{ item.label }}</span>
      </a-menu-item>
    </router-link>
  </a-sub-menu>
</template>
