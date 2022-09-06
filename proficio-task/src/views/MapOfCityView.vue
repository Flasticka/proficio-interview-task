<template>
  <GoogleMap style="width: 1000px; height: 700px" :center="center" :zoom="10">
    <Marker :options="{ position: center }" />
    <Marker
      :key="spot.trcid"
      v-for="spot in spots"
      :options="{
        position: {
          lat: parseFloat(spot.location.latitude.replace(',', '.')),
          lng: parseFloat(spot.location.longitude.replace(',', '.')),
        },
      }"
    ></Marker>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import getSpots from "../composable/getSpots";

export default {
  name: "MapOfCity",
  components: { GoogleMap, Marker },
  props: ["data"],
  setup() {
    const center = { lat: 52.379189, lng: 4.899431 };
    const { spots, error, loadData } = getSpots();
    loadData();
    if (error.value) {
      console.log(error.value);
      return { error };
    }
    console.log(spots);
    return { spots, center };
  },
  methods: {},
};
</script>
