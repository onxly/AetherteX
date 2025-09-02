import { Outlet, Route, Routes } from "react-router";
import Home from "./pages";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import Personaldetails from "./pages/Personaldetails";
import addressbook from "./pages/Addresssbook";

import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import NotFound from "./pages/not-found";
import AdminHome from "./pages/admin";
import Header from "./components/Header";

// Layout that always shows Navbar
function LayoutWithNavbar() {
  return (
    <>
      <Header NumOf={4} AccName={"Account"} />
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
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/Personaldetails" element={<Personaldetails />} />
        <Route path="/Addresssbook" element={<addressbook />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
