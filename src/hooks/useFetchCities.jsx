import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://restcountries.com/v3.1/name/";

const useFetchCities = (request) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!request || request.trim() === "") {
      setData([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(request);
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    const handler = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [request]);

  return { data, loading, error };
};

export default useFetchCities;
