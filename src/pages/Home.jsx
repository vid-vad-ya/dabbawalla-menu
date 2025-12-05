import "../styles/layout.css";
import "../styles/buttons.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <h1 style={{ fontSize: "38px", color: "#ff8b42" }}>
        🍱 Welcome to ByteMeals!
      </h1>

      <p style={{ color: "#5a4a42", marginBottom: "20px", fontSize: "16px" }}>
        Warm, homely tiffin meals delivered fresh every day.
      </p>

      <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
        <Link to="/menu"><button>See Today’s Menu</button></Link>
        <Link to="/order"><button>Order Now</button></Link>
      </div>
    </div>
  );
}
