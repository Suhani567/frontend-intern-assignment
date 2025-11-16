export default function FilterBar({ category, setCategory, categories }) {
  return (
    <select
      className="select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      aria-label="Filter by category"
    >
      <option value="all">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}
