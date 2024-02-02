import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
   
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
      children:[
        {
          path: "",
          name: "home",
          component: () => import("../pages/client/home.vue"),
        },
        {
          path: "information",
          name: "information",
          component: () => import("../pages/client/information.vue"),
        },
        {
          path: "demo",
          name: "demo",
          component: () => import("../views/demo.vue"),
        },
        {
          path: "tip",
          name: "tips",
          component: () => import("../pages/client/tips.vue"),
        },
        {
          path: "tag",
          name: "tags",
          component: () => import("../pages/client/tags.vue"),
        },
        {
          path: "video",
          name: "videos",
          component: () => import("../pages/client/videos.vue"),
        },
        {
          path: "link",
          name: "links",
          component: () => import("../pages/client/links.vue"),
        },
        {
          path: "new",
          name: "news",
          component: () => import("../pages/client/newpost.vue"),
        },
      ]
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
