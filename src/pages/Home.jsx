import { Link } from "react-router-dom";
import "../styles/layout.css";
import "../styles/buttons.css";

export default function Home() {
  return (
    <div className="page-container">
      <header style={{ marginBottom: 18 }}>
        <h1>Welcome to ByteMeals</h1>
        <p style={{ color: "#666" }}>Tiffin-style meals delivered with care — built with React.</p>
      </header>

      <section style={{ display: "flex", gap: 12 }}>
        <Link to="/menu"><button>See Menu</button></Link>
        <Link to="/order"><button>Order Now</button></Link>
      </section>
    </div>
  );
}
