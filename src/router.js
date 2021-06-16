import { createRouter, createWebHashHistory } from "vue-router";
import Home from "/@/views/home.vue"
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home},
  { path: "/login", component: () => import('/@/views/login/index.vue')},
  { path: "/mine", component: () => import('/@/views/Mine/index.vue')},
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router;
