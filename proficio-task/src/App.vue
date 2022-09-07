<script lang="ts">
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
import getLanguage from "./composable/getLanguage";
export default {
  name: "App",
  components: { RouterView },
  setup() {
    const currentLanguage = ref("en");
    const { language, error, loadData } = getLanguage(currentLanguage.value);
    loadData();
    if (error.value) {
      console.log(error.value);
      return { error };
    }
    return { language };
  },
};
</script>

<template>
  <RouterView
    v-if="language !== null && language.value !== null"
    :language="language"
  />
</template>

<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
