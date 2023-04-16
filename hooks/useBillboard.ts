import fetcher from "@/lib/fetcher";
import { TMovie } from "@/types/api/movie";
import useSWR from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR<TMovie[]>("api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
