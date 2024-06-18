export const CatFactCardSkeleton = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <div
            className={
              "relative rounded-lg -top-8 -mb-4 bg-gray-300 border h-20 w-20 shadow-md animate-pulse"
            }
          ></div>

          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p
                className={`w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-1`}
              ></p>
            </div>
            <p
              className={`w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-2 `}
            ></p>
          </div>
        </div>
        <p
          className={`w-full bg-gray-300 rounded-lg shadow-md p-4 animate-pulse-delay-3`}
        ></p>
      </div>
    </>
  );
};
