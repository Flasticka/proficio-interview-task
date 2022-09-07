import { ref } from "vue";

const getLanguage = (id) => {
  const language = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/languages/" + id);
      if (!res.ok) {
        throw Error("no data fetched");
      }
      language.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { language, error, loadData };
};
export default getLanguage;
