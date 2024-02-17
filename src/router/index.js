import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Gallery from "@/views/Gallery.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import Admin from "@/views/Admin.vue";
import UserProfile from "@/views/UserProfile.vue";
import ProductInfoVue from "@/views/ProductInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/gallery/:type",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/gallery/:type/:id",
      name: "productInfo",
      component: ProductInfoVue,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/user_profile/:id",
      name: "userProfile",
      component: UserProfile,
    },
    {
      path: "/:catchAll(.*)",
      name: "errorPage",
      component: ErrorPage,
    },
  ],
});

export default router;
