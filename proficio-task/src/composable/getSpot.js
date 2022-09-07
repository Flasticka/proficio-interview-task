import { ref } from "vue";

const getSpot = (id) => {
  const spot = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/spots/" + id);
      if (!res.ok) {
        throw Error("no data fetched");
      }
      spot.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { spot, error, loadData };
};
export default getSpot;
