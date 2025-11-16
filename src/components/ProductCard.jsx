export default function ProductCard({ product, onView }) {
  return (

    // Card component to display product details
    <article className="card" role="article">
      <img src={product.image} alt={product.title} />
      <div>
        <div className="title">{product.title}</div>
        <div className="meta">{product.category}</div>
        <div className="price">${product.price}</div>
      </div>

      <div style={{ marginTop: "auto" }}>
        <button className="btn" onClick={() => onView(product)}>View Details</button>
      </div>
    </article>
  );
}
