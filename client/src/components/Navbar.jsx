import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="navbar">

      <h1 className="logo">
        ShopSphere
      </h1>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>

  );

};

export default Navbar;