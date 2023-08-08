<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { DownOutlined } from "@ant-design/icons-vue";

defineOptions({
  name: "SidebarProfile",
});

const { count } = defineProps({
  count: Number,
});
</script>

<template>
  <div class="test">
    <span>
      <a-badge :count="count">
        <a-avatar shape="square" size="large">
          <UserOutlined />
        </a-avatar>
      </a-badge>
    </span>
    <div class="container">
      <span class="name">Administrator</span>
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          Click me
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <router-link to="http://www.alipay.com/">내 프로필</router-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">로그아웃</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<style lang="less">
.test {
  margin-left: 16px;
  display: flex;
  align-items: center;
}

.name {
  margin-top: 8px;
  margin-bottom: 12px;
}

.container {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
</style>
