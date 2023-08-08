import BoardRegisterPage from "../views/Board/BoardRegisterPage.vue";
import BoardGetPage from "../views/Board/BoardGetPage.vue";
import MocksTestPage from "../views/Mocks/MocksTestPage.vue";
import GnbSidebar from "../components/layouts/GnbSidebar/GnbSidebar.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: GnbSidebar,
  },
  {
    path: "/board",
    name: "BoardPage",
    component: GnbSidebar,
    children: [
      {
        path: "/board",
        name: "BoardRegisterPage",
        component: BoardRegisterPage,
      },
    ],
  },
  {
    path: "/board/list",
    name: "BoardGetPage",
    component: BoardGetPage,
  },
  {
    path: "/test",
    name: "MocksTestPage",
    component: MocksTestPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
