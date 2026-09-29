import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header style={{ display: "flex" }}>
      <Link to="/">Fast react pizza</Link>
      <SearchOrder />
      <h3>Welcome Abdallah</h3>
    </header>
  );
}

export default Header;
