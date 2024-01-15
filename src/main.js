import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./pages/dashboard.js";

const router = createRouter({
  
  history: createWebHistory('/src'),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/dashboard", component: dashboard },
  ],
});

const app = createApp({
  /*html*/
  template: `
  <div>
    <router-view />
  </div>
  `,
});
app.use(router);
app.mount("#app");
