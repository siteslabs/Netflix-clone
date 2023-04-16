import fetcher from "@/lib/fetcher";
import { TMovie } from "@/types/api/movie";
import useSWR from "swr";

const useMovieList = () => {
  const { data, isLoading, error } = useSWR<TMovie[]>("api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useMovieList;
