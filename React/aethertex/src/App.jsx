import { useState, useEffect, useContext } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Home from "./pages";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import AdminHome from "./pages/admin";
import Checkout from "./pages/checkout";
import ProtectedRoute from "./contexts/ProtectedRoute";
import Header from "./components/Header";
import NotFound from "./pages/not-found";
import Unauthorized from "./pages/unauthorized";
import "./App.css";

// Layouts
function LayoutWithNavbar() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function LayoutNoNavbar() {
  return <Outlet />;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  // Initial page load fade
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fadeOut) return;
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [fadeOut]);

  // Loader on route change
  useEffect(() => {
    setLoading(true);
    setFadeOut(false);
    const timer = setTimeout(() => setFadeOut(true), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AuthProvider>
      {loading && (
        <div id="preloader" className={fadeOut ? "fade-out" : ""}>
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
        </Route>

        {/* Routes without navbar */}
        <Route element={<LayoutNoNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/:id" element={<AdminHome />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
