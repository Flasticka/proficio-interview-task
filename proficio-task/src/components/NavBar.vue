<template>
  <div class="nav-bar-container">
    <NavBarLanguageHeader
      :header="language.value.header"
      @selectedLanguage="handleSelectedLanguage"
    />

    <button
      class="custom-button"
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

      <button
        class="custom-button"
        :disabled="!nameFilter && !descriptionFilter"
      >
        {{ language.value.addFilter }}
      </button>
    </form>
    <div class="active-filter" v-if="Object.keys(route.query).length !== 0">
      <div v-if="route.query.name">
        <span>{{ language.value.nameFilter }}</span>
        <span class="last-span">{{ route.query.name }}</span>
      </div>
      <div v-if="route.query.description">
        <span>{{ language.value.descriptionFilter }}</span>
        <span class="last-span">{{ route.query.description }}</span>
      </div>
      <button class="custom-button" @click="handleRemoveFilter">
        {{ language.value.removeFilter }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import NavBarLanguageHeader from "./NavBarLanguageHeader.vue";
export default {
  inheritAttrs: true,
  name: "NavBar",
  props: ["language"],
  components: { NavBarLanguageHeader },
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

<style>
.nav-bar-container {
  padding-bottom: 1rem;
  width: 100%;
  background-color: black;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.custom-button:disabled,
.custom-button:disabled:hover {
  background-color: grey;
  color: white;
  cursor: default;
}
.custom-button:hover {
  color: black;
  background-color: white;
  border: 2px solid black;
}
.custom-button {
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
.last-span {
  margin-left: 1rem;
  color: grey;
}
</style>
