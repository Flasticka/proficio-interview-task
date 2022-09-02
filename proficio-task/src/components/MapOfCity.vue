<template>
  <GoogleMap style="width: 1000px; height: 700px" :center="center" :zoom="10">
    <div v-bind:key="item.trcid" v-for="item in data">
      <Marker
        :options="{ position: { lat: item.latitude, lng: item.longitude } }"
      />
    </div>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: "MapOfCity",
  components: { GoogleMap, Marker },
  props: ["data"],
  setup() {
    const center = { lat: 52.379189, lng: 4.899431 };

    return { center };
  },
};
</script>
