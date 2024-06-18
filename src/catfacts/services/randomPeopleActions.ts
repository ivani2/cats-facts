import { randomPeopleApi } from "../api/randomPeopleApi";
import { PersonData, RandomPersonResponse } from "../interfaces/random-person";

export const getRandomPeople = async (): Promise<PersonData> => {
  const { data } = await randomPeopleApi.get<RandomPersonResponse>(`/api`);
  // console.log("DATA DESDE RANDOM PEOPLE: ", data);
  const { results } = data;
  return results[0];
};
