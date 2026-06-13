import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">
          NovaCart 🛒
        </h1>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>

          <Link to="/admin">
            Admin
          </Link>

          {/* LOGOUT BUTTON */}

          <button
            className="logout-btn"
            onClick={() => {

              localStorage.removeItem("user");

              alert("Logged Out Successfully ✅");

              window.location.href = "/login";

            }}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-left">

          <p className="mini-title">
            🔥 #1 Modern Tech Store
          </p>

          <h1>
            Discover The Future Of
            <span> Online Shopping</span>
          </h1>

          <p className="hero-description">
            Professional MERN Stack E-Commerce Platform
            with modern UI, secure checkout, responsive
            design and real-time shopping experience.
          </p>

          <div className="hero-buttons">

            <Link to="/products">
              <button className="primary-btn">
                Shop Now
              </button>
            </Link>

            <Link to="/cart">
              <button className="secondary-btn">
                View Cart
              </button>
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <h2>10K+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2>5K+</h2>
              <p>Customers</p>
            </div>

            <div>
              <h2>99%</h2>
              <p>Satisfaction</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="floating-card">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="phone"
            />
          </div>

          <div className="floating-card second-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="headphone"
            />
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <div className="feature-card">
          <h2>⚡ Fast Delivery</h2>

          <p>
            Lightning fast product delivery experience.
          </p>
        </div>

        <div className="feature-card">
          <h2>🔒 Secure Payment</h2>

          <p>
            100% secure checkout and payment gateway.
          </p>
        </div>

        <div className="feature-card">
          <h2>🎧 Premium Support</h2>

          <p>
            24/7 customer support for all users.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Home;