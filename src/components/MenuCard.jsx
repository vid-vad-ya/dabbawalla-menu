export default function MenuCard({ item, onClick }) {
  return (
    <div className="menu-card" onClick={onClick}>
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>

      <p
        className={`veg ${item.veg ? "green" : "red"}`}
      >
        {item.veg ? "Veg" : "Non‑Veg"}
      </p>
    </div>
  );
}
