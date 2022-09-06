import { createRouter, createWebHistory } from "vue-router";
import MapOfCityView from "../views/MapOfCityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MapOfCityView,
    },
  ],
});

export default router;
