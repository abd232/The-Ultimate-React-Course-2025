import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.name.value) return;
    dispatch({ type: "user/updateName", payload: e.target.name.value });
    navigate("/menu");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold font-semibold text-center mt-10">
        The best pizza.
        <span className="text-yellow-500 block mt-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Straight out of the oven,straight to you.
        </span>
        {userName && (
          <div className="mt-4 flex flex-col items-center space-y-4 md:space-x-2 md:space-y-0">
            <p className="text-lg font-medium text-stone-600 mt-2">
              Welcome back, {userName}!
            </p>
            <Link
              to="/menu"
              className="block bg-yellow-300 mt-6 hover:bg-yellow-400 text-stone-800 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl lg:text-3xl"
            >
              Go to menu
            </Link>
          </div>
        )}
        {!userName && (
          <Form
            className="mt-4 flex flex-col items-center space-y-4 md:space-x-2 md:space-y-0"
            method="get"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="name"
              className="block mb-4 text-2xl sm:text-xl md:text-2xl lg:text-3xl"
            >
              Welcome👋, Please start with telling us your Name.
            </label>
            <input
              className="border border-yellow-100 w-2/3 text-center text-sm sm:text-base sm:w-1/2 bg-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl lg:text-3xl"
              type="text"
              placeholder="Your Full Name"
              name="name"
            />
            <input
              className="block bg-yellow-300 mt-6 hover:bg-yellow-400 text-stone-800 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl lg:text-3xl"
              type="submit"
              value="Start Ordering"
            />
          </Form>
        )}
      </h1>
    </div>
  );
}

export default Home;
