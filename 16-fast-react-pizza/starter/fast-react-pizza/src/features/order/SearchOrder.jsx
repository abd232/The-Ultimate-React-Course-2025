import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSerchQuery] = useState("");
  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigator(`/order/${searchQuery}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        onChange={(e) => setSerchQuery(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchOrder;
