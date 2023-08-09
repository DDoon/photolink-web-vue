<script lang="ts" setup>
import NavMenuItemGroup from "../NavMenu/NavMenuItemGroup.vue";
import NavMenuItem from "../NavMenu/NavMenuItem.vue";
import { ref } from "vue";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

defineOptions({
  name: "GnbSidebar",
});

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);

const mainItems = [
  { key: "1", label: "홈", icon: "home-outlined", path: "/home" },
  {
    key: "2",
    label: "상품 목록",
    icon: "shopping-cart-outlined",
    path: "/products",
  },
];

const otherItems1 = [
  { key: "3", label: "예제 1", icon: "example-outlined", path: "/example1" },
  { key: "4", label: "예제 2", icon: "example-outlined", path: "/example2" },
];

const otherItems2 = [
  { key: "5", label: "테스트 1", icon: "test-outlined", path: "/test1" },
  { key: "6", label: "테스트 2", icon: "test-outlined", path: "/test2" },
];
</script>
<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    :width="250"
    style="
      height: 100vh;
      background: #f5f5f5;
      box-shadow: inset -7px 0 9px -7px rgba(0, 0, 0, 0.1);
    "
  >
    <a-menu v-model:selectedKeys="selectedKeys" theme="gray-3" mode="inline">
      <NavMenuItemGroup title="메인">
        <NavMenuItem :subKey="'sub1'" :title="'홈'" :items="mainItems" />
        <NavMenuItem :subKey="'sub2'" :title="'상품 관리'" :items="mainItems" />
      </NavMenuItemGroup>
      <NavMenuItemGroup title="또뭐잇나">
        <NavMenuItem :subKey="'sub3'" :title="'예제'" :items="otherItems1" />
        <NavMenuItem :subKey="'sub4'" :title="'예제2'" :items="otherItems1" />
      </NavMenuItemGroup>
      <NavMenuItemGroup title="귀찮아3">
        <NavMenuItem :subKey="'sub5'" :title="'테스트'" :items="otherItems2" />
        <NavMenuItem :subKey="'sub6'" :title="'테스트2'" :items="otherItems2" />
      </NavMenuItemGroup>
    </a-menu>
  </a-layout-sider>
</template>
