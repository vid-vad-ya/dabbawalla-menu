import { useState, useMemo } from "react";
import menuData from "../data/menu.json";
import MenuCard from "../components/MenuCard";
import "../styles/layout.css";
import "../styles/menu.css";
import "../styles/buttons.css";

/* small modal implemented inline for item preview */
function ItemModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: 8 }} />
        <h2 style={{ marginTop: 12 }}>{item.name}</h2>
        <p>₹{item.price}</p>
        <p style={{ color: item.veg ? "green" : "red", fontWeight: 600 }}>{item.veg ? "Veg" : "Non‑Veg"}</p>
        <button onClick={onClose} style={{ marginTop: 12 }}>Close</button>
      </div>
    </div>
  );
}

export default function Menu() {
  const [day, setDay] = useState("today");
  const [vegOnly, setVegOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [previewItem, setPreviewItem] = useState(null);

  // don't mutate menuData; compute filtered list on each render using useMemo
  const itemsForDay = menuData[day] ? [...menuData[day]] : [];

  const filtered = useMemo(() => {
    let items = itemsForDay;
    if (vegOnly) items = items.filter(i => i.veg);
    if (query && query.trim().length) {
      const q = query.trim().toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q));
    }
    return items;
  }, [itemsForDay, vegOnly, query]);

  return (
    <>
      <div className="page-container">
        <h1>Menu</h1>

        <div className="filters" role="region" aria-label="menu filters">
          <button onClick={() => setDay("today")} className={day === "today" ? "active-btn" : ""}>Today</button>
          <button onClick={() => setDay("tomorrow")} className={day === "tomorrow" ? "active-btn" : ""}>Tomorrow</button>
          <button onClick={() => setVegOnly(v => !v)}>{vegOnly ? "Show All" : "Veg Only"}</button>
        </div>

        <input
          type="search"
          className="search-input"
          placeholder="Search dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search dishes"
        />

        <div className="menu-grid" role="list">
          {filtered.length === 0 ? (
            <p style={{ marginTop: 20, color: "#666" }}>No dishes match your criteria.</p>
          ) : (
            filtered.map(item => (
              <MenuCard key={item.id} item={item} onClick={() => setPreviewItem(item)} />
            ))
          )}
        </div>
      </div>

      <ItemModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </>
  );
}
