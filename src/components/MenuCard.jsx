export default function MenuCard({ item, onClick }) {
  return (
    <article className="menu-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="card-media">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="price">₹{item.price}</p>
        <p className="veg" style={{ color: item.veg ? "green" : "red", fontWeight: 600 }}>
          {item.veg ? "Veg" : "Non‑Veg"}
        </p>
      </div>
    </article>
  );
}
