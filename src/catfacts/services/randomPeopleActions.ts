import { randomPeopleApi } from "../api/randomPeopleApi";
import { PersonData, RandomPersonResponse } from "../interfaces/random-person";
import axios from "axios";

export const getRandomPeople = async (): Promise<PersonData> => {
  try {
    const { data, status } = await randomPeopleApi.get<RandomPersonResponse>(
      `/api`
    );
    // console.log("DATA DESDE RANDOM PEOPLE: ", data);
    if (status >= 200 && status < 300) {
      const { results } = data;
      return results[0];
    } else {
      throw new Error(`Error HTTP: ${status}`);
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
