<template>
  <div class="spot-preview-container">
    <div class="spot-preview-container__header">
      <h1>{{ spotData.details[language.value.trcid].title }}</h1>
    </div>
    <div v-if="imageToShow">
      <img :src="imageToShow.url" alt="image" />
    </div>
    <h3>{{ spotData.details[language.value.trcid].calendarsummary }}</h3>
    <hr />
    <p>
      {{ spotData.location.adress }} {{ spotData.location.city }}
      {{ spotData.location.zipcode }}
    </p>
    <hr />
    <p>{{ spotData.details[language.value.trcid].shortdescription }}</p>
    <button class="see-more custom-button" @click="handleClick(spotData.trcid)">
      {{ language.value.seeMore }}
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import router from "../router/index";
export default {
  name: "SpotPreview",
  props: ["spotData", "language"],
  setup(props) {
    console.log(props.spotData)
    const imageToShow = computed(() => {
      return props.spotData.media.length !== 0
        ? props.spotData.media.filter((img) => img.main === "true")[0]
        : null;
    });
    return { imageToShow };
  },
  methods: {
    handleClick(id) {
      router.push({ name: "spot", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.spot-preview-container__header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background-color: black;
  color: white;
  padding: 1rem;
  width: 100%;
}
.see-more {
  margin-bottom: 1rem;
}
.spot-preview-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
hr {
  width: 100%;
}
img {
  margin-top: 1rem;
  width: 400px;
  height: 200px;
}
</style>
