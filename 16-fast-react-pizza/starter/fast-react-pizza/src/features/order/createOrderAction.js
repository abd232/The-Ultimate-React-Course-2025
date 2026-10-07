import { redirect } from "react-router-dom";
import { createOrder } from "../../apis/apiRestaurant";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
export default async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const errors = {};

  if (!isValidPhone(data.phone)) errors.phone = "Please enter a valid phone";
  if (Object.keys(errors).length > 0) return errors;

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
