export const LoadingSpinner = () => {
  return (
    <>
      <div className="absolute inset-0 m-auto w-full z-50 bg-transparent flex items-center justify-center min-h-screen p-5">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
