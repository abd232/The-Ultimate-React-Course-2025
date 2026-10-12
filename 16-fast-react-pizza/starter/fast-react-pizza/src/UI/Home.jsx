import { Form } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-semibold text-center mt-10">
        The best pizza.
        <span className="text-yellow-500 block mt-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Straight out of the oven,straight to you.
        </span>
        <Form
          className="mt-4 flex flex-col items-center space-y-4 md:space-x-2 md:space-y-0"
          method="get"
          action="/order"
        >
          <label
            htmlFor="name"
            className="block mb-4 text-2xl sm:text-xl md:text-2xl lg:text-3xl"
          >
            Welcome👋, Please start with telling us your Name.
          </label>
          <input
            className="border border-yellow-100 bg-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl lg:text-3xl"
            type="text"
            placeholder="Your Full Name"
          />
          <input
            className="block bg-yellow-300 mt-6 hover:bg-yellow-400 text-stone-800 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl lg:text-3xl"
            type="submit"
            value="Start Ordering"
          />
        </Form>
      </h1>
    </div>
  );
}

export default Home;
