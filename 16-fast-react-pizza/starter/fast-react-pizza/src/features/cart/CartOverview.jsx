import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <Link
      to="/cart"
      className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-stone-800 p-4 text-yellow-100"
    >
      <p className="flex gap-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>

      <span>Open cart &rarr;</span>
    </Link>
  );
}

export default CartOverview;
