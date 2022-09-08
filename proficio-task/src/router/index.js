import { createRouter, createWebHistory } from "vue-router";
import MapOfCityView from "../views/MapOfCityView.vue";
import SpotPage from "../views/SpotPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MapOfCityView,
      props: true,
    },
    {
      path: "/:id",
      name: "spot",
      component: SpotPage,
      props: true,
    },
  ],
});

export default router;
