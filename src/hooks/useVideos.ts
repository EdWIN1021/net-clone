import { useEffect, useState } from "react";
import { themoviedb } from "../api/themoviedb";

interface Video {
  key: string;
}

const useVideos = (id: number) => {
  const [data, setData] = useState<Video[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        try {
          const res = await themoviedb.get(
            `/movie/${id}/videos?api_key=${
              import.meta.env.VITE_API_KEY
            }&language=en-US`
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
    }
  }, [id]);

  return { data, loading };
};

export default useVideos;
