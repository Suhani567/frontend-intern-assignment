export default function ProductModal({ product, close }) {
  if (!product) return null;
  return (

    // Product Detail Modal
    <div className="modal-bg" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="top">
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <div className="meta">{product.category}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>${product.price}</div>
            <p style={{ marginTop: 12 }}>{product.description}</p>
            <div style={{ marginTop: 14 }}>
              <button className="btn" onClick={close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
