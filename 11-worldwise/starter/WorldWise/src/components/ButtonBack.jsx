import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Button type="back" onClickFunction={() => navigate(-1)}>
      &larr;back
    </Button>
  );
}

export default ButtonBack;
