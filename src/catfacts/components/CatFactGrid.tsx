import { FC, useState } from "react";
import { CatFactCard } from "./CatFactCard";
import { useCatFactSlice } from "../hooks/useCatFactsSlice";
// import useInfiniteScroll from "../../shared/utils/hooks/useInfiniteScroll";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";
import { IoArrowDown, IoArrowUpCircleOutline } from "react-icons/io5";
import { CatFactGridSkeleton } from "./CatFactGridSkeleton";
import { ErrorPage } from "../../shared/components/ErrorPage";

export const CatFactGrid: FC = () => {
  const { catFactQuery } = useCatFactSlice();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // useInfiniteScroll(() => {
  //   if (
  //     !catFactQuery.isFetching &&
  //     !catFactQuery.isFetchingNextPage &&
  //     catFactQuery.hasNextPage
  //   ) {
  //     catFactQuery.fetchNextPage();
  //   }
  // }, catFactQuery.isFetching || catFactQuery.isFetchingNextPage);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  if (catFactQuery.isError) {
    return <ErrorPage errorMessage={catFactQuery.error.message} />;
  }

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {catFactQuery.isLoading ||
        catFactQuery.isFetching ||
        (catFactQuery.isFetchingNextPage && <LoadingSpinner />)}

      {catFactQuery.isFetched ? (
        <div className="grid grid-cols-1 w-full mx-2 sm:w-1/2 sm:mx-0 mb-28 mt-20">
          <div className="w-full">
            {catFactQuery.data?.pages.flat().map((catFact, index) => (
              <CatFactCard
                key={index + "cat"}
                catFact={catFact}
                isCatFactsQueryFetched={catFactQuery.isFetched}
              />
            ))}
          </div>

          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-10 right-20 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none flex items-center"
            >
              <IoArrowUpCircleOutline size={30} />
              &nbsp;Take me to the top!
            </button>
          )}
          {catFactQuery.hasNextPage && (
            <button
              onClick={() => catFactQuery.fetchNextPage()}
              className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none flex items-center"
            >
              <IoArrowDown size={30} />
              Load more facts...
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 w-full mx-2 sm:w-3/2 sm:mx-0 mb-28 mt-20">
          <div className="flex justify-center align-middle items-center w-full">
            <CatFactGridSkeleton />
          </div>
        </div>
      )}
    </>
  );
};
