import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

function Header() {
  const userName = useSelector((state) => state.user.name);
  return (
    <header className="header w-full flex items-center justify-between uppercase bg-white p-4 px-4 sm:px-10 shadow-md bg-yellow-400">
      <Link
        className="text-xl p-0 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 hover:text-stone-500"
        to="/"
      >
        Fast react pizza
      </Link>
      <div className="flex items-center space-x-4">
        <SearchOrder />
        <h3 className="hidden md:block">Welcome {userName}</h3>
      </div>
    </header>
  );
}

export default Header;
