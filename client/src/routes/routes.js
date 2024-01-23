import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin.vue"),
      children: [
        {
          path: "",
          name: "admin",
          component: () => import("../pages/admin/admin_home.vue"),
        },
        {
          path: "tag",
          name: "tag",
          component: () => import("../pages/admin/tag.vue"),
        },
      ],
    },
  ],
});
export default router;
