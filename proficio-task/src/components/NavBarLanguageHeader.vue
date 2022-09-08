<template>
  <div class="nav-bar__header-language">
    <div class="header-container">
      <h1 class="nav-bar-container__header">{{ header }}</h1>
    </div>

    <LanguageSelector
      id="last-item"
      @selectedLanguage="handleSelectedLanguage"
    />
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";
export default {
  name: "NavBarLanguageHeader",
  props: ["header"],
  components: { LanguageSelector },
  methods: {
    handleSelectedLanguage(selectedLanguage) {
      this.$emit("selectedLanguage", selectedLanguage);
    },
  }
};
</script>

<style>
.nav-bar__header-language {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 20%;
}
.header-container {
  width: 85%;
  display: flex;
  justify-content: center;
}
.nav-bar-container__header {
  color: white;
  font-weight: bold;
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
#last-item {
  width: 15%;
  justify-content: flex-start;
  margin-right: 8rem;
}
</style>
