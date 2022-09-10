<template>
  <div class="spot-preview-container">
    <div class="spot-preview-container__header">
      <h1 data-test="spot-preview__title">{{ spotData.details[language.value.trcid].title }}</h1>
    </div>
    <div v-if="imageToShow">
      <img :src="imageToShow.url" alt="image" />
    </div>
    <h3 data-test="spot-preview__calendar-summary">{{ spotData.details[language.value.trcid].calendarsummary }}</h3>
    <hr />
    <div class="spot-preview-container__adress">
      <span data-test="spot-preview__address">{{ spotData.location.adress }}</span>
      <span data-test="spot-preview__city-zipcode" class="last-item"
        >{{ spotData.location.city }} {{ spotData.location.zipcode }}</span
      >
    </div>
    <hr />
    <p>{{ spotData.details[language.value.trcid].shortdescription }}</p>
    <button data-test="spot-preview__see-more" class="see-more custom-button" @click="handleClick(spotData.trcid)">
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
.spot-preview-container__adress {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-weight: bold;
}
.spot-preview-container__adress .last-item {
  margin-top: 0.5rem;
}
</style>
