import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

function App() {

  const user = localStorage.getItem("user");

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/" />
            ) : (
              <Register />
            )
          }
        />

        {/* HOME */}

        <Route
          path="/"
          element={
            user ? (
              <Home />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={
            user ? (
              <Products />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* PRODUCT DETAILS */}

        <Route
          path="/product/:id"
          element={
            user ? (
              <ProductDetails />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            user ? (
              <Cart />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            user ? (
              <Admin />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;