import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Gallery from "@/views/Gallery.vue";
import ErrorPage from "@/views/ErrorPage.vue";
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
      path: "/:catchAll(.*)",
      name: "errorPage",
      component: ErrorPage,
    },
  ],
});

export default router;
