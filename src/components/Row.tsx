import useFetch from "../hooks/useFetch";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

const Row = ({
  title,
  type,
  url,
}: {
  title: string;
  type: string;
  url: string;
}) => {
  const { data, loading } = useFetch(url);

  return (
    <div className="my-[3vw] text-[1.4vw] leading-[1.25vw] text-white">
      <h2 className="my-6 font-medium">{title}</h2>
      <div className="flex flex-row gap-2 overflow-x-scroll">
        {!loading && (
          <>
            {data?.map((data: Movie) => (
              <MovieCard key={data?.id} movie={data} type={type} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
