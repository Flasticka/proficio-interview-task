<template>
  <div class="nav-bar-container">
    <h1 class="nav-bar-container__header">Spots in Amsterdam</h1>
    <button
      v-if="Object.keys(route.query).length === 0 && !filterDisplay"
      @click="handleCreateFilter"
    >
      + Add Filter
    </button>
    <form
      @submit.prevent="handleSubmit"
      v-if="filterDisplay"
      class="nav-bar-container__form"
    >
      <div>
        <label>Name</label>
        <input type="text" v-model="nameFilter" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" v-model="descriptionFilter" />
      </div>

      <button :disabled="!nameFilter && !descriptionFilter">
        + Add Filter
      </button>
    </form>
    <div class="active-filter" v-if="Object.keys(route.query).length !== 0">
      <div v-if="route.query.name">Name: {{ route.query.name }}</div>
      <div v-if="route.query.description">
        Description: {{ route.query.description }}
      </div>
      <button @click="handleRemoveFilter">Remove filter</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  inheritAttrs: true,
  name: "NavBar",
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
  },
};
</script>

<style scoped>
.nav-bar-container {
  height: 8rem;
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
