import { redirect } from "react-router-dom";
import { createOrder } from "../../apis/apiRestaurant";

export default async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  console.log(newOrder);
  const res = await createOrder(newOrder);
  console.log(res);
  return redirect(`/order/${res.id}`);
}
