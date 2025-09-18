import { useState, useEffect} from "react";
import { Outlet, Route, Routes,useLocation} from "react-router-dom";
import Home from "./pages";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import NotFound from "./pages/not-found";
import AdminHome from "./pages/admin";
import Header from "./components/Header";
import Order from "./pages/order";
import Orderhistory from "./pages/orderhistory";
import Cuppons from "./pages/cuppons";
import Checkout from "./pages/checkout";

import Loader from "./components/Loader";

// Layout that always shows Navbar
function LayoutWithNavbar() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// Layout without Navbar
function LayoutNoNavbar() {
  return <Outlet />;
}

function App() {
  
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fadeOut) return;
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [fadeOut]);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    setFadeOut(false);
    const timer = setTimeout(() => setFadeOut(true), 300); // loader duration on page change
    return () => clearTimeout(timer);
  }, [location]);
  

  return (
    <AuthProvider>
      {loading && (
        <div id="preloder" className={fadeOut ? "fade-out" : ""}>
          <div className="loader"></div>
        </div>
      )}

      <Routes>
        {/* Routes with navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderhistory" element={<Orderhistory />} />
          <Route path="/cuppons" element={<Cuppons />} />
        </Route>

        {/* Routes without navbar */}
        <Route element={<LayoutNoNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/:id" element={<AdminHome />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
