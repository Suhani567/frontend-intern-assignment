import "../styles/components.css";

export default function SkeletonLoader() {
  return (

    //  placeholder content while the products are loading...
    <div className="card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-price"></div>
      <div className="skeleton-meta"></div>
      <div className="skeleton-btn"></div>
    </div>
  );
}
