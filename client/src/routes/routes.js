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
        {
          path: "post",
          name: "post",
          component: () => import("../pages/admin/post.vue"),
        },
        {
          path: "link",
          name: "link",
          component: () => import("../pages/admin/link_about.vue"),
        },
        {
          path: "render",
          name: "render",
          component: () => import("../pages/admin/render_ytb.vue"),
        },
        {
          path: "user",
          name: "user",
          component: () => import("../pages/admin/user.vue"),
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../pages/admin/dashboard.vue"),
        },
      ],
    },
  ],
});
export default router;
