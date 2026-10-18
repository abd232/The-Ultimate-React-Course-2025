import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  if (cart.length === 0) return null;
  return (
    <Link
      to="/cart"
      className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-between bg-stone-800 p-4 text-yellow-100"
    >
      <p className="flex gap-4">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice.toFixed(2)}</span>
      </p>

      <span>Open cart &rarr;</span>
    </Link>
  );
}

export default CartOverview;
