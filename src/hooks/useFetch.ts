import { useEffect, useState } from "react";
import { themoviedb } from "../api/themoviedb";
import { Movie } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<Movie[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await themoviedb.get(url);

        if (res.status === 200) {
          setData(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading };
};

export default useFetch;
