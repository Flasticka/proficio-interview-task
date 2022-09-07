<template>
  <div class="map-of-city-container">
    <NavBar @filter="handleFilter" @remove="removeFilter" />
    <GoogleMap style="width: 90%; height: 700px" :center="center" :zoom="10">
      <Marker
        :key="spot.id"
        v-for="spot in filteredSpots"
        :options="{
          position: {
            lat: parseFloat(spot.location.latitude.replace(',', '.')),
            lng: parseFloat(spot.location.longitude.replace(',', '.')),
          },
        }"
        @click="handleMarkerClick(spot.trcid)"
      ></Marker>
    </GoogleMap>
    <span>aiais{{language}}</span>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import getSpots from "../composable/getSpots";
import NavBar from "../components/NavBar.vue";
import { computed, ref } from "vue";
import router from "../router/index";
import { useRoute } from "vue-router";

export default {
  name: "MapOfCity",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker, NavBar },
  props: ["language"],
  setup(props) {
    console.log(props)
    const route = useRoute();
    const nameFilter = ref("");
    const descriptionFilter = ref("");
    const center = { lat: 52.379189, lng: 4.899431 };
    const { spots, error, loadData } = getSpots();
    loadData();
    console.log(spots);
    if (error.value) {
      console.log(error.value);
      return { error };
    }
    const filteredSpots = computed(() => {
      return spots.value.filter((spot) =>
        spot.title.includes(route.query.name || "")
      );
    });
    return { filteredSpots, center, nameFilter, descriptionFilter };
  },
  methods: {
    handleFilter(filterData) {
      router.push({
        name: "home",
        query: {
          name: filterData.nameFilter,
          description: filterData.descriptionFilter,
        },
      });
    },
    handleMarkerClick(id) {
      router.push({ name: "spot", params: { id: id } });
    },
    removeFilter() {
      router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.map-of-city-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
