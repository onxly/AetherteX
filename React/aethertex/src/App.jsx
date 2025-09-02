import { Route, Routes } from "react-router";
import Home from "./pages";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import Personaldetails from "./pages/Personaldetails";

import { AuthProvider } from "./contexts/AuthContext";

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
      </Routes>
    </AuthProvider>
  );
}

export default App;
