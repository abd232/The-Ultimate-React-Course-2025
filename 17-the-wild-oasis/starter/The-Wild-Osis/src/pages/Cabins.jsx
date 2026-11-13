import { getCabins } from "../services/apiCabin";
import Row from "../ui/Row";

function Cabins() {
  const { cabin, error } = getCabins();
  console.log("Cabins.jsx", cabin, error);
  return (
    <Row type="horizontal">
      <h1>All cabins</h1>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
