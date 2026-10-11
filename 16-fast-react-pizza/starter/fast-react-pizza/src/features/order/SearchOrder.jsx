import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigator(`/order/${searchQuery}`);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        className="w-30 focus:w-40 md:w-60 md:focus:w-80 transition-all duration-300 bg-yellow-100 border border-gray-300 rounded-md p-1"
        type="text"
        placeholder="Search order by ID"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
