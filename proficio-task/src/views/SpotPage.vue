<template>
  <div class="spot-page-container">
    <div v-if="spot" class="spot-page-container__nav-bar">
      <NavBarLanguageHeader
        :header="spot.title"
        @selectedLanguage="handleSelectedLanguage"
      />
    </div>
    <div class="botttom-part" v-if="spot">
      <div class="adress">
        <div class="adress__adress">
          <div>
            {{ spot.location.adress }}
          </div>
          <div>{{ spot.location.city }} {{ spot.location.zipcode }}</div>
        </div>
      </div>
      <div class="website" v-if="spot.urls.length !== 0">
        <form :action="spot.urls[0]">
          <button class="custom-button" type="submit">
            {{ language.value.website }}
          </button>
        </form>
      </div>
    </div>
    <hr />
    <Carousel
      class="carousel"
      v-if="spot && spot.media.length !== 0"
      :items-to-scroll="1"
      :items-to-show="1"
    >
      <template #slides>
        <Slide v-for="image in spot.media" :key="image.url">
          <img class="slide-image" :src="image.url" />
        </Slide>
      </template>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <p
      class="spot-page-container__paragraph"
      v-html="spot.details[language.value.trcid].longdescription"
      v-if="spot"
    />
  </div>
</template>

<script>
import getSpot from "../composable/getSpot";
import NavBarLanguageHeader from "../components/NavBarLanguageHeader.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
export default {
  props: ["id", "language"],
  components: { NavBarLanguageHeader, Carousel, Pagination, Navigation, Slide },
  setup(props) {
    const { spot, error, loadData } = getSpot(props.id);
    loadData();
    if (error.value) {
      console.log(error.value);
      return { error };
    }

    return { spot };
  },
  methods: {
    handleSelectedLanguage(selectedLanguage) {
      this.$emit("selectedLanguage", selectedLanguage);
    },
  },
};
</script>

<style>
.spot-page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spot-page-container__nav-bar {
  padding-bottom: 1rem;
  width: 100%;
  background-color: black;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide-image {
  width: 500px;
  height: 300px;
}
.carousel {
  width: 50%;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
.carousel__prev:not(.carousel__prev--in-active):hover,
.carousel__next:not(.carousel__next--in-active):hover {
  background-color: white;
  border: 2px black solid;
  color: black;
}
.carousel__prev:not(.carousel__prev--in-active),
.carousel__next:not(.carousel__next--in-active) {
  background-color: black;
  border: 2px white solid;
  color: white;
}
.carousel__pagination-button--active {
  background-color: black;
}
.carousel__pagination-button:not(.carousel__pagination-button--active) {
  background-color: white;
}
.carousel__pagination-button {
  width: 2rem;
  height: 0.7rem;
  border: 2px black solid;
}
.spot-page-container__paragraph {
  width: 50%;
  margin-bottom: 3rem;
}
.spot-page-container hr {
  width: 50%;
  margin: 1rem 0;
}
.botttom-part {
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
}
.adress__adress div {
  margin-top: 0.7rem;
  font-weight: bold;
}
.website {
  margin-left: 3rem;
}
</style>
