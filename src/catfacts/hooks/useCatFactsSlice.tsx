import { useInfiniteQuery } from "@tanstack/react-query";
import { getCatFacts } from "../services/catActions";


export const useCatFactSlice = () => {
  //uuid para el queryKey //card
  const catFactQuery = useInfiniteQuery({
    queryKey: ["catfacts"],
    queryFn: getCatFacts,
    initialPageParam: 1,
    getNextPageParam: (currentPage, allPagesTillNow) => {
      if (currentPage.length === 0) {
        return;
      }

      return allPagesTillNow.length + 1;
    },
  });

  return { catFactQuery };
};
