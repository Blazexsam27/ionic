import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Test from "../components/IntroComponent/Test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
  ],
});

export default router;
