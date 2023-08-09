<script lang="ts" setup>
import { UserOutlined, BellOutlined } from "@ant-design/icons-vue";
import Avatar from "@/components/common/Avatar.vue";

defineOptions({
  name: "GnbHeader",
});

const { count } = defineProps({
  count: Number,
});
</script>
<template>
  <a-layout-header style="background: #ffffff">
    <a-input style="width: 300px" />

    <Avatar size="default" class="user-icon">
      <UserOutlined />
    </Avatar>

    <a-badge :count="count" color="#4caf50">
      <Avatar class="bell-icon" size="default">
        <BellOutlined />
      </Avatar>
    </a-badge>
  </a-layout-header>
</template>
<style scoped lang="less">
.ant-layout-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
}

.user-icon {
  margin-left: 16px;
}

.bell-icon {
  margin-left: 16px;
}
</style>
