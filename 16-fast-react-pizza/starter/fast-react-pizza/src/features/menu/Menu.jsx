import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      {menu.map((pizza) => {
        const cartItem = cart.find((item) => item.pizzaId === pizza.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        return <MenuItem key={pizza.id} pizza={pizza} quantity={quantity} />;
      })}
    </div>
  );
}

export default Menu;
