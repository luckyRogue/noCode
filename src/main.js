import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "./index.css";

const app = createApp(App);
app.use(Router).use(ElementPlus);
app.mount("#app");
