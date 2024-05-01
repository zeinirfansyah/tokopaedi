import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import Layout from "./layouts/Layout";
import { Checkout } from "./pages/Checkout";
import { CheckoutHistory } from "./pages/CheckoutHistory";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/history" element={<CheckoutHistory/>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
