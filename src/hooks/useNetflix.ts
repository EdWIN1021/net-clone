import { useEffect, useState } from "react";
import { themoviedb } from "../api/themoviedb";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

const useNetflix = () => {
  const [data, setData] = useState<Movie[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await themoviedb.get(
          `/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&with_networks=213&language=en-US`
        );

        if (res.status === 200) {
          setData(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
};

export default useNetflix;
