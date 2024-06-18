import { useState } from "react";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";
import useInfiniteScroll from "../../shared/utils/useInfiniteScroll";
import { CatFactGrid } from "../components/CatFactGrid";
import { useCatFactSlice } from "../hooks/useCatFactsSlice";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function CatHomePage() {
  const { catFactQuery } = useCatFactSlice();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useInfiniteScroll(() => {
    if (
      !catFactQuery.isFetching &&
      !catFactQuery.isFetchingNextPage &&
      catFactQuery.hasNextPage
    ) {
      catFactQuery.fetchNextPage();
    }
  }, catFactQuery.isFetching || catFactQuery.isFetchingNextPage);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center align-middle items-center w-full bg-slate-300">
      {catFactQuery.isFetched && (
        <div className="grid grid-cols-1 w-full mx-2 sm:w-1/2 sm:mx-0 mb-28 mt-20">
          <CatFactGrid catFacts={catFactQuery.data?.pages.flat() ?? []} />
          {/* <button
            onClick={() => catFactQuery.fetchNextPage()}
            disabled={
              catFactQuery.isFetchingNextPage ||
              catFactQuery.isFetching ||
              !catFactQuery.hasNextPage
            }
            className="bg-blue-600 text-white w-1/2 mt-2"
          >
            {catFactQuery.isFetching || catFactQuery.isFetchingNextPage ? '...loading' : "Load more..."}
          </button> */}

          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-10 right-20 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none flex items-center"
            >
              <IoArrowUpCircleOutline size={30} />
              &nbsp;Scroll to Top
            </button>
          )}
        </div>
      )}
      {catFactQuery.isFetchingNextPage ||
        (catFactQuery.isFetching && <LoadingSpinner />)}
    </div>
  );
}
