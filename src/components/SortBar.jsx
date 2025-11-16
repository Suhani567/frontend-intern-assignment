export default function SortBar({ sortOrder, setSortOrder }) {
  return (
    <select
      className="select"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      aria-label="Sort by price"
    >
      <option value="none">Sort By Price</option>
      <option value="low-high">Low → High</option>
      <option value="high-low">High → Low</option>
    </select>
  );
}
