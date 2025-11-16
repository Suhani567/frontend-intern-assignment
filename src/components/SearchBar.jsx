export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search products by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search products"
    />
  );
}
