<template>
  <div class="map-of-city-container">
    <NavBar
      @filter="handleFilter"
      @remove="removeFilter"
      :language="language"
      @selectedLanguage="handleSelectedLanguage"
    />
    <GoogleMap style="width: 90%; height: 700px" :center="center" :zoom="10">
      <Marker
        :key="spot.trcid"
        v-for="spot in filteredSpots"
        :options="{
          position: {
            lat: parseFloat(spot.location.latitude.replace(',', '.')),
            lng: parseFloat(spot.location.longitude.replace(',', '.')),
          },
        }"
      >
        <InfoWindow
          ><SpotPreview :spotData="spot" :language="language"
        /></InfoWindow>
      </Marker>
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import getSpots from "../composable/getSpots";
import NavBar from "../components/NavBar.vue";
import SpotPreview from "../components/SpotPreview.vue";
import { computed, ref } from "vue";
import router from "../router/index";
import { useRoute } from "vue-router";

export default {
  name: "MapOfCity",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker, NavBar, InfoWindow, SpotPreview },
  props: ["language"],
  setup(props) {
    console.log(props.language.value);
    const route = useRoute();
    const nameFilter = ref("");
    const descriptionFilter = ref("");
    const currentDisplayed = ref("");
    const center = { lat: 52.379189, lng: 4.899431 };
    const { spots, error, loadData } = getSpots();
    loadData();
    console.log(spots);

    if (error.value) {
      console.log(error.value);
      return { error };
    }

    const filteredSpots = computed(() => {
      return spots.value.filter(
        (spot) =>
          spot.title.includes(route.query.name || "") &&
          (spot.details[props.language.value.trcid].longdescription.includes(
            route.query.description || ""
          ) ||
            spot.details[props.language.value.trcid].shortdescription.includes(
              route.query.description || ""
            ))
      );
    });
    return {
      filteredSpots,
      center,
      nameFilter,
      descriptionFilter,
      currentDisplayed,
    };
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
    removeFilter() {
      router.push({ name: "home" });
    },
    handleSelectedLanguage(selectedLanguage) {
      this.$emit("selectedLanguage", selectedLanguage);
    },
    //handleHover(marker) {
    //const infoWindow = InfoWindow();
    //console.log(this.$refs["info"].infoWindow, this.$refs["map"].map, marker);
    //this.$refs["info"].infoWindow.open(
    //this.$refs["map"].map,
    //this.$refs[marker].marker
    //);
    //},
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
