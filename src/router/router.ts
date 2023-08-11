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
  // * 대시보드
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

  // * 유저
  {
    path: "/user/update",
    name: "UserUpdatePage",
    component: Layout,
    children: [
      {
        path: "/user/update",
        name: "UserUpdatePage",
        component: () => import("../views/User/UserUpdatePage.vue"),
      },
    ],
  },

  // * 상품
  {
    path: "/product/register", // * 상품 등록
    name: "ProductRegisterPage",
    component: Layout,
    children: [
      {
        path: "/product/register",
        name: "ProductRegisterPage",
        component: () => import("../views/Product/ProductRegisterPage.vue"),
      },
    ],
  },
  {
    path: "/product/update", // * 상품 수정
    name: "ProductUpdatePage",
    component: Layout,
    children: [
      {
        path: "/product/update",
        name: "ProductUpdatePage",
        component: () => import("../views/Product/ProductUpdatePage.vue"),
      },
    ],
  },
  {
    path: "/product/list", // * 상품 목록
    name: "ProductListPage",
    component: Layout,
    children: [
      {
        path: "/product/list",
        name: "ProductListPage",
        component: () => import("../views/Product/ProductListPage.vue"),
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
