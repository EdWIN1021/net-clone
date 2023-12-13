import { useEffect, useState } from "react";
import { themoviedb } from "../api/themoviedb";
import { Movie } from "../types";

const useMovieOrSeries = (id: number, type: string) => {
  const [data, setData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await themoviedb.get(
          `/${type}/${id}?append_to_response=videos,images`
        );

        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, type]);

  return { data, loading };
};

export default useMovieOrSeries;
