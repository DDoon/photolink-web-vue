import BoardRegisterPage from "../views/Board/BoardRegisterPage.vue";
import BoardGetPage from "../views/Board/BoardGetPage.vue";
import MocksTestPage from "../views/Mocks/MocksTestPage.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/layouts/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
  },
  {
    path: "/home",
    name: "HomePage",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "HomeMainPage",
        component: () => import("../views/Home/HomeMainPage.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "BoardPage",
    component: Layout,
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
