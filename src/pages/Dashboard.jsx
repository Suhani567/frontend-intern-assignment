import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import "../styles/components.css";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [selected, setSelected] = useState(null);

  useEffect(() => {

    // api fetching
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // derive categories dynamically
  const categories = products.length > 0 ? Array.from(new Set(products.map((p) => p.category))) : [];

  if (loading) return (
    <div className="dashboard container">
      <div className="header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Mini Product Dashboard</div>
          <ThemeToggle />
        </div>
      </div>
      <div className="filters" role="region" aria-label="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar category={category} setCategory={setCategory} categories={categories} />
        <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <div className="product-grid" role="list">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="card">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-price"></div>
            <div className="skeleton-meta"></div>
            <div className="skeleton-btn"></div>
          </div>
        ))}
      </div>
    </div>
  );
  if (error) return <div className="container center">{error}</div>;

  // search + category
  let filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    return matchSearch && matchCategory;
  });

  // sort
  if (sortOrder === "low-high") filtered = filtered.slice().sort((a, b) => a.price - b.price);
  if (sortOrder === "high-low") filtered = filtered.slice().sort((a, b) => b.price - a.price);

  return (
    <div className="dashboard container">
      <div className="header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Mini Product Dashboard</div>

          <ThemeToggle />


        </div>
      </div>

      <div className="filters" role="region" aria-label="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar category={category} setCategory={setCategory} categories={categories} />
        <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {filtered.length === 0 && (
        <p className="no-results animate-pulse">
            No Products Found.
        </p>
      )}
      <div className="product-grid" role="list">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onView={(p) => setSelected(p)} />
        ))}
      </div>

      <ProductModal product={selected} close={() => setSelected(null)} />
    </div>
  );
}
