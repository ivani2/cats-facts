import { CatFact, CatFactsResponse } from "../interfaces/cat-facts";
import { catfactsApi } from "../api/catfactsApi";
// import { sleep } from "../../shared/utils/sleep";

interface QueryProps {
  pageParam?: number;
}

export const getCatFacts = async ({
  pageParam = 1,
}: QueryProps): Promise<CatFact[]> => {

  // await sleep(4);

  const paramsForSearch = new URLSearchParams();

  paramsForSearch.append("page", pageParam.toString());

  const { data } = await catfactsApi.get<CatFactsResponse>(`/facts`, {
    params: paramsForSearch,
  });

  return data.data;
};
