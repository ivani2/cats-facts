import { useNavigate } from "react-router-dom";
interface Props{
  errorMessage?: string;
}
export const ErrorPage = ({errorMessage=":c"}:Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like something happened.
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that!
                  <h3>{errorMessage}</h3>
                  <br />
                  Please visit our homepage to get where you
                  need to go.
                </p>
                <button
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Take me to the cat facts, please!
                </button>
              </div>
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://i.ibb.co/G9DC8S0/404-2.png"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.pinimg.com/736x/16/2e/bf/162ebf3917176c19e604a128ff9b49d3.jpg"
          />
        </div>
      </div>
    </>
  );
};
