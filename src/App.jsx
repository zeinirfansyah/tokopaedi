import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Cart } from "./pages/Cart";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
