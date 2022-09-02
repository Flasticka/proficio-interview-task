<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import data from "../../data/establishment-data.json";
export default {
  name: "App",
  components: {RouterView},
  data() {
    const datao = data;
    return datao;
  },
  
}
</script>

<template>
  <RouterView :data="datao" />
</template>
