function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search projects..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
