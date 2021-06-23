import { createRouter, createWebHashHistory } from "vue-router";
import Home from "/@/views/home.vue";
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: () => import("/@/views/login/index.vue") },
  {
    path: "/mine",
    component: () => import("/@/views/Mine/index.vue"),
    redirect: "/mine/create",
    children: [
      {
        path: "create",
        component: () => import("/@/views/Mine/create.vue"),
      },
      {
        path: "project",
        component: () => import("/@/views/Mine/project.vue"),
      },
      {
        path: "recycleBin",
        component: () => import("/@/views/Mine/recycleBin.vue"),
      },
      {
        path: "dataBase",
        component: () => import("/@/views/Mine/database.vue"),
      },
      {
        path: "deploy",
        component: () => import("/@/views/Mine/deploy.vue"),
      },
    ],
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router;
