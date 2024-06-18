import { usePersonRandom } from "../hooks/usePersonRandom";
import { CatFact } from "../interfaces/cat-facts";

type Props = {
  catFact: CatFact;
};

export const CatFactCard = ({ catFact }: Props) => {
  const { randomPeopleQuery } = usePersonRandom({ catFact: catFact.fact });

  return (
    <>
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          {randomPeopleQuery.isFetching || randomPeopleQuery.isLoading ? (
            <div
              className={
                "relative rounded-lg -top-8 -mb-4 bg-gray-300 border h-20 w-20 shadow-md animate-pulse"
              }
            ></div>
          ) : (
            <img
              src={`${
                !randomPeopleQuery.isFetching
                  ? randomPeopleQuery.data?.picture.thumbnail
                  : "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
              }`}
              className={`relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20`}
              alt=""
              loading="lazy"
            />
          )}

          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p
                className={`${
                  randomPeopleQuery.isFetching || randomPeopleQuery.isLoading
                    ? "w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse"
                    : "relative text-xl whitespace-nowrap truncate overflow-hidden"
                } `}
              >
                {!randomPeopleQuery.isFetching
                  ? randomPeopleQuery.data?.name.first
                  : ""}
              </p>
              <a className="text-gray-500 text-xl" href="#">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p
              className={`${
                randomPeopleQuery.isFetching || randomPeopleQuery.isLoading
                  ? "w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse"
                  : "text-gray-400 text-sm"
              } `}
            >
              {randomPeopleQuery.isFetching
                ? ""
                : randomPeopleQuery.data?.email}
            </p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">{catFact.fact}</p>
      </div>
    </>
  );
};
