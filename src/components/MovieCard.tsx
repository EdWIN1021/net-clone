import { IoMdPlay } from "react-icons/io";
import { MouseEvent, useState } from "react";
import { GoThumbsup } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Skeleton from "react-loading-skeleton";
import { Movie } from "../types";
import useMovieOrSeries from "../hooks/useMovieOrSeries";

const MovieCard = ({ movie, type }: { movie: Movie; type: string }) => {
  const [leftPosition, setLeftPosition] = useState<number>();
  const { data, loading } = useMovieOrSeries(movie?.id, type);

  const handleMouseOver = (e: MouseEvent<HTMLElement>) => {
    setLeftPosition(e.currentTarget.getBoundingClientRect().left);
  };

  return (
    <div className="group min-w-[15.5%] cursor-pointer rounded">
      <div className="relative rounded group-hover:opacity-0">
        {loading ? (
          <Skeleton style={{ height: "8.2vw" }} baseColor="#b3b3b3" />
        ) : (
          <>
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
              onMouseOver={handleMouseOver}
            />
            {data?.images?.logos[0]?.file_path && (
              <img
                className="absolute left-1/2 top-1/2 w-[8vw] -translate-x-2/4 -translate-y-2/4"
                src={`https://image.tmdb.org/t/p/w500/${data?.images?.logos[0]?.file_path}`}
                alt=""
              />
            )}
          </>
        )}
      </div>

      <div
        className="z-50 hidden shadow-2xl group-hover:absolute group-hover:inline-block group-hover:w-[15%] group-hover:animate-scale_card"
        style={{ left: leftPosition }}
      >
        <img
          className="h-full w-full rounded-t"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />
        <div className="rounded-b bg-[rgb(20,20,20)] p-3">
          <div className="mb-6 flex">
            <div className="flex flex-1 gap-[.3vw]">
              <div className="h-[2vw] w-[2vw] ">
                <IoIosAdd className="h-full w-full rounded-full pl-[0.3vw] border p-1" />
              </div>

              <div className="h-[2vw] w-[2vw] ">
                <IoMdPlay className="h-full w-full rounded-full bg-white fill-black pl-[0.3vw]" />
              </div>

              <div className="h-[2vw] w-[2vw] ">
                <GoThumbsup className="h-full w-full rounded-full border p-1" />
              </div>
            </div>

            <div className="h-[2vw] w-[2vw] ">
              <IoIosArrowDown className="h-full w-full rounded-full border p-1" />
            </div>
          </div>

          <p className="mb-2 text-[1vw]">
            &quot;
            {data?.title ||
              data?.original_name ||
              data?.original_title ||
              data?.name}
            &quot;
          </p>
          <ul>
            {data?.genres.map((genre: { id: number; name: string }) => (
              <li
                className="mr-1 inline-block text-center text-[.8vw]"
                key={genre.id}
              >
                <span>{genre.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
