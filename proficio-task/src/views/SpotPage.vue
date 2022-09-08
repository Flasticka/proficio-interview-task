<template>
  <div v-if="spot">{{ spot.title }}</div>
</template>

<script>
import getSpot from "../composable/getSpot";
export default {
  props: ["id", "language"],
  setup(props) {
    const { spot, error, loadData } = getSpot(props.id);
    loadData();
    console.log(spot);
    if (error.value) {
      console.log(error.value);
      return { error };
    }
    return { spot };
  },
};
</script>

<style></style>
