import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { TUser } from "@/types/api/movie";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR<TUser>(
    "/api/current",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
