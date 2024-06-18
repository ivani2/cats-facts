// import { ErrorPage } from "../../shared/components/ErrorPage";
import { usePersonRandom } from "../hooks/usePersonRandom";
import { CatFact } from "../interfaces/cat-facts";

type Props = {
  catFact: CatFact;
  isCatFactsQueryFetched: boolean;
};

export const CatFactCard = ({ catFact, isCatFactsQueryFetched }: Props) => {
  const { randomPeopleQuery } = usePersonRandom({ catFact: catFact.fact, isCatFactsQueryFetched });

  /* Si dejo esta pieza de código, tendríamos bastantes gatitos tristes, ya que tooManyRequests es un error que React Query nos ayuda a
  solventar ya que hace más intentos cuando recibe una respuesta fallida, entonces prefiero dejar que React Query haga más peticiones para
  que todos los gatitos tengan una persona asignada, de tal forma que si yo tuviera acceso a la API de randomPeople, pediría
  que no me bloqueen por tooManyRequests, o asignaríamos más peticiones o mejoraríamos la petición para siempre enviar una randomPerson
   */
  // if (randomPeopleQuery.isError) {
  //   return <ErrorPage errorMessage={randomPeopleQuery.error.message} />;
  // }

  return (
    <>
      <div className="w-full relative grid grid-cols-1 p-4 mb-8 border rounded-lg bg-white shadow-lg">
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
                    ? "w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-1"
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
                  ? "w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-2"
                  : "text-gray-400 text-sm"
              } `}
            >
              {randomPeopleQuery.isFetching
                ? ""
                : randomPeopleQuery.data?.email}
            </p>
          </div>
        </div>
        <p
          className={`${
            !catFact || catFact.length == 0
              ? "w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-3"
              : "-mt-4 text-gray-500"
          }`}
        >
          {catFact.fact}
        </p>
      </div>
    </>
  );
};
