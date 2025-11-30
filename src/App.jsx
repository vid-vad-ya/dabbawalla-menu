import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
   
  );
}

export default App;
