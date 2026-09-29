import { getMenu } from "../../apis/apiRestaurant";

export async function loader() {
  const menu = await getMenu();
  return menu;
}
