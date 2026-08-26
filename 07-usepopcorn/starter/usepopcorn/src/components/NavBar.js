export default function NavBar({
  children,
  searchQuery,
  setSearchQuery,
  searchResultCount,
}) {
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
      />
      <p className="num-results">Found {searchResultCount} Results</p>
    </div>
  );
}
