import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="header w-full flex items-center justify-between uppercase bg-white p-4 px-10 shadow-md bg-yellow-400">
      <Link
        className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 hover:text-stone-500"
        to="/"
      >
        Fast react pizza
      </Link>
      <div className="flex items-center space-x-4">
        <SearchOrder />
        <h3 className="hidden md:block">Welcome Abdallah</h3>
      </div>
    </header>
  );
}

export default Header;
