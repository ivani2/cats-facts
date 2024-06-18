import { FC } from "react";
import { CatFact } from "../interfaces/cat-facts";
import { CatFactCard } from "./CatFactCard";

type Props = {
  catFacts: CatFact[];
};
export const CatFactGrid: FC<Props> = ({ catFacts }: Props) => {
  return (
    <>
      <div className="w-full">
        {catFacts.map((catFact, index) => (
          <CatFactCard key={index + "cat"} catFact={catFact} />
        ))}
      </div>
    </>
  );
};
