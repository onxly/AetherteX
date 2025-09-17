import { Outlet, Route, Routes } from "react-router";
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
  return (
    <AuthProvider>
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
