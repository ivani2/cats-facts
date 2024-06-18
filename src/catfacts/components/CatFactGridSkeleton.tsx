import { CatFactCardSkeleton } from "./CatFactCardSkeleton";

export const CatFactGridSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 w-full mx-2 sm:w-1/2 sm:mx-0 mb-28 mt-20">
        <div className="w-full">
          {[1, 2, 3].map((_, index) => (
            <CatFactCardSkeleton key={index + "cat"} />
          ))}
        </div>
      </div>
    </>
  );
};
