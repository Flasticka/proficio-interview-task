<template>
  <RouterView
    v-if="currentLanguageData !== null && currentLanguageData.value !== null"
    :language="currentLanguageData"
    @selectedLanguage="handleSelectedLanguage"
  />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
import getLanguage from "./composable/getLanguage";
export default {
  name: "App",
  components: { RouterView },
  setup() {
    const currentLanguage = ref("es");
    const currentLanguageData = ref(null);
    watch(currentLanguage, () => {
      const { language, error, loadData } = getLanguage(currentLanguage.value);
      loadData();
      if (error.value) {
        console.log(error.value);
        return { error };
      }
      currentLanguageData.value = language;
    });
    currentLanguage.value = "en";
    return { currentLanguageData, currentLanguage };
  },
  methods: {
    handleSelectedLanguage(selectedLanguage) {
      this.currentLanguage = selectedLanguage;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
