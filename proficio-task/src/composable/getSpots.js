import { ref } from "vue";

const getSpots = () => {
  const spots = ref([]);
  const error = ref(null);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/spots");
      if (!res.ok) {
        throw Error("no data fetched");
      }
      spots.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { spots, error, loadData };
};
export default getSpots;
