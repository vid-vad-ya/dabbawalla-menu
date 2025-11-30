import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/menu">Menu</Link> |{" "}
      <Link to="/order">Order</Link> |{" "}
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
