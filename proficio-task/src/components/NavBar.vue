<template>
  <div class="nav-bar-container">
    <div class="nav-bar__upper-part">
      <div class="header-container">
        <h1 class="nav-bar-container__header">{{ language.value.header }}</h1>
      </div>

      <LanguageSelector
        id="last-item"
        @selectedLanguage="handleSelectedLanguage"
      />
    </div>

    <button
      v-if="Object.keys(route.query).length === 0 && !filterDisplay"
      @click="handleCreateFilter"
    >
      {{ language.value.addFilter }}
    </button>
    <form
      @submit.prevent="handleSubmit"
      v-if="filterDisplay"
      class="nav-bar-container__form"
    >
      <div>
        <label>{{ language.value.nameFilter }}</label>
        <input type="text" v-model="nameFilter" />
      </div>
      <div>
        <label>{{ language.value.descriptionFilter }}</label>
        <input type="text" v-model="descriptionFilter" />
      </div>

      <button :disabled="!nameFilter && !descriptionFilter">
        {{ language.value.addFilter }}
      </button>
    </form>
    <div class="active-filter" v-if="Object.keys(route.query).length !== 0">
      <div v-if="route.query.name">
        {{ language.value.nameFilter }}: {{ route.query.name }}
      </div>
      <div v-if="route.query.description">
        {{ language.value.descriptionFilter }}: {{ route.query.description }}
      </div>
      <button @click="handleRemoveFilter">
        {{ language.value.removeFilter }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import LanguageSelector from "./LanguageSelector.vue";
export default {
  inheritAttrs: true,
  name: "NavBar",
  props: ["language"],
  components: { LanguageSelector },
  setup() {
    const route = useRoute();
    const nameFilter = ref("");
    const descriptionFilter = ref("");
    const filterDisplay = ref(false);
    return {
      nameFilter,
      descriptionFilter,
      filterDisplay,
      route,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("filter", {
        nameFilter: this.nameFilter,
        descriptionFilter: this.descriptionFilter,
      });
      this.filterDisplay = false;
    },
    handleCreateFilter() {
      this.filterDisplay = true;
    },
    handleRemoveFilter() {
      this.filterDisplay = false;
      this.nameFilter = "";
      this.descriptionFilter = "";
      this.$emit("remove");
    },
    handleSelectedLanguage(selectedLanguage) {
      this.$emit("selectedLanguage", selectedLanguage);
    },
  },
};
</script>

<style scoped>
.nav-bar-container {
  height: 9rem;
  width: 100%;
  background-color: black;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-bar-container__header {
  color: white;
  font-weight: bold;
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
.nav-bar-container__form {
  width: 50%;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-bar__upper-part {
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
#last-item {
  width: 15%;
  justify-content: flex-start;
  margin-right: 8rem;
}
button:disabled,
button:disabled:hover {
  background-color: grey;
  color: white;
  cursor: default;
}
button:hover {
  color: black;
  background-color: white;
}
button {
  font-weight: bold;
  color: white;
  background-color: black;
  width: 6rem;
  height: 2.5rem;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
}
input {
  height: 1.5rem;
  border-radius: 5px;
  border: 0;
  margin-left: 2rem;
}
.active-filter {
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  font-size: 1.1rem;
}
label {
  font-size: 1.1rem;
}
</style>
