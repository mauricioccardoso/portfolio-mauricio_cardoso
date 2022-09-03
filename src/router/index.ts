import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import PageNotFound from "../components/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});

export default router;
