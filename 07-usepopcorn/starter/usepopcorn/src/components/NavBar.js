import { useRef, useEffect } from "react";

export default function NavBar({
  children,
  searchQuery,
  setSearchQuery,
  searchResultCount,
}) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      const handleKeyDown = (event) => {
        if (event.code === "Enter") {
          setSearchQuery("");
          inputEl.current.focus();
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [setSearchQuery],
  );
  return (
    <div className="nav-bar">
      {children}
      <input
        type="text"
        name="searchQuery"
        placeholder="Search Movies..."
        className="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={inputEl}
      />
      <p className="num-results">Found {searchResultCount} Results</p>
    </div>
  );
}
