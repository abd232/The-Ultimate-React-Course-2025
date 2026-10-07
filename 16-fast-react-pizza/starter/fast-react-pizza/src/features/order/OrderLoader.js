import { getOrder } from "../../apis/apiRestaurant";

async function OrderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default OrderLoader;
