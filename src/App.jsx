import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import Layout from "./layouts/Layout";
import { Checkout } from "./pages/Checkout";
import { CheckoutHistory } from "./pages/CheckoutHistory";
import CheckoutHistoryDetail from "./pages/CheckoutHistoryDetail";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="/history" element={<CheckoutHistory />} />
            <Route path="/history/:id" element={<CheckoutHistoryDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
