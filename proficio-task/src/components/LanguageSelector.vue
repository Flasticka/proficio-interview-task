<template>
  <div class="images">
    <img src="../assets/en.jpg" alt="en" @click="handleClick('en')" />
    <img src="../assets/de.png" alt="de" @click="handleClick('de')" />
    <img src="../assets/es.png" alt="es" @click="handleClick('es')" />
    <img src="../assets/fr.png" alt="fr" @click="handleClick('fr')" />
    <img src="../assets/it.png" alt="it" @click="handleClick('it')" />
    <img src="../assets/nl.png" alt="nl" @click="handleClick('nl')" />
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  methods: {
    handleClick(selectedLanguage) {
      console.log(selectedLanguage);
      this.$emit("selectedLanguage", selectedLanguage);
    },
  },
};
</script>

<style scoped>
.images {
  display: flex;
  align-items: center;
  height: 2rem;
}
img:hover {
  width: 24px;
  height: 22px;
}
img {
  width: 20px;
  height: 18px;
  border: 1px white solid;
  margin-left: 0.2rem;
  border-radius: 10px;
  cursor: pointer;
}
</style>
