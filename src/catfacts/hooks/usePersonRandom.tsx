import { useQuery } from "@tanstack/react-query";
import { getRandomPeople } from "../services/randomPeopleActions";

interface Props{
  catFact: string;
}

export const usePersonRandom = ({catFact}:Props) => {
  const randomPeopleQuery = useQuery({
    queryKey: ["randomPeople",{catFact}],
    queryFn: getRandomPeople,
  });
  return { randomPeopleQuery };
};
