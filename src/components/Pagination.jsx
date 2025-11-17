import "../styles/components.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination" style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "8px 12px",
          border: "1px solid var(--border)",
          background: currentPage === 1 ? "var(--bg-secondary)" : "var(--bg)",
          color: "var(--text)",
          borderRadius: 4,
          cursor: currentPage === 1 ? "not-allowed" : "pointer"
        }}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "8px 12px",
            border: "1px solid var(--border)",
            background: page === currentPage ? "var(--primary)" : "var(--bg)",
            color: page === currentPage ? "black" : "var(--text)",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: page === currentPage ? "bold" : "normal"
          }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "8px 12px",
          border: "1px solid var(--border)",
          background: currentPage === totalPages ? "var(--bg-secondary)" : "var(--bg)",
          color: "var(--text)",
          borderRadius: 4,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer"
        }}
      >
        Next
      </button>
    </div>
  );
}
