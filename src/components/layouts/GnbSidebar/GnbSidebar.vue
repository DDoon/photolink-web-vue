<script setup lang="ts">
import { ref } from "vue";
// import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons-vue";
import NavMenuItemGroup from "../NavMenu/NavMenuItemGroup.vue";
import NavMenuItem from "../NavMenu/NavMenuItem.vue";
import SidebarProfile from "../SidebarProfile.vue";

defineOptions({
  name: "GnbSidebar",
});

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);

const subMenuItems = [
  { key: "4", label: "하위 아이템 1", icon: "user-outlined", path: "/item1" },
  {
    key: "5",
    label: "하위 아이템 2",
    icon: "video-camera-outlined",
    path: "/item2",
  },
];
</script>

<template>
  <a-layout>
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      style="height: 100vh; background: #f5f5f5"
    >
      <a-menu v-model:selectedKeys="selectedKeys" theme="gray-3" mode="inline">
        <NavMenuItemGroup>
          <SidebarProfile :count="2" />
        </NavMenuItemGroup>

        <NavMenuItemGroup title="귀찮아1">
          <NavMenuItem
            :subKey="'sub1'"
            :title="'내 하위 메뉴'"
            :items="subMenuItems"
          />
          <NavMenuItem
            :subKey="'sub2'"
            :title="'내 하위 메뉴2'"
            :items="subMenuItems"
          />
        </NavMenuItemGroup>
        <NavMenuItemGroup title="귀찮아2">
          <NavMenuItem
            :subKey="'sub1'"
            :title="'내 하위 메뉴'"
            :items="subMenuItems"
          />
          <NavMenuItem
            :subKey="'sub2'"
            :title="'내 하위 메뉴2'"
            :items="subMenuItems"
          />
        </NavMenuItemGroup>
        <NavMenuItemGroup title="귀찮아3">
          <NavMenuItem
            :subKey="'sub1'"
            :title="'내 하위 메뉴'"
            :items="subMenuItems"
          />
          <NavMenuItem
            :subKey="'sub2'"
            :title="'내 하위 메뉴2'"
            :items="subMenuItems"
          />
        </NavMenuItemGroup>
        <NavMenuItemGroup title="귀찮아4">
          <NavMenuItem
            :subKey="'sub1'"
            :title="'내 하위 메뉴'"
            :items="subMenuItems"
          />
          <NavMenuItem
            :subKey="'sub2'"
            :title="'내 하위 메뉴2'"
            :items="subMenuItems"
          />
        </NavMenuItemGroup>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
        :style="{
          background: '#fff',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="less">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
