import { CatFact, CatFactsResponse } from "../interfaces/cat-facts";
import { catfactsApi } from "../api/catfactsApi";
import axios from "axios";

// import { sleep } from "../../shared/utils/sleep";

interface QueryProps {
  pageParam?: number;
}

export const getCatFacts = async ({
  pageParam = 1,
}: QueryProps): Promise<CatFact[]> => {
  const paramsForSearch = new URLSearchParams();
  paramsForSearch.append("page", pageParam.toString());

  try {
    const response = await catfactsApi.get<CatFactsResponse>(`/facts`, {
      params: paramsForSearch,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Error HTTP: ${response.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          `Error de API: ${error.response.status} - ${error.response.statusText}`
        );
        throw new Error(
          `Error de API: ${error.response.status} - ${error.response.statusText}`
        );
      } else if (error.request) {
        console.error(
          "Error de solicitud: No se recibió respuesta del servidor"
        );
        throw new Error(
          "Error de solicitud: No se recibió respuesta del servidor"
        );
      } else {
        console.error(`Error: ${error.message}`);
        throw new Error(`Error: ${error.message}`);
      }
    } else {
      console.error(`Error desconocido: ${(error as Error).message}`);
      throw new Error(`Error desconocido: ${(error as Error).message}`);
    }
  }
};
