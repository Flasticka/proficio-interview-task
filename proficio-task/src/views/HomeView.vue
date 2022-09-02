<script lang="ts">
import MapOfCity from "../components/MapOfCity.vue";

export default {
  name: "HomeView",
  components: { MapOfCity },
  props: ["data"],
};
</script>

<template>
  <main>
    <MapOfCity :data="data" />
  </main>
</template>
