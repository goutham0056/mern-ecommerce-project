import { Link } from "react-router-dom";

function Cart() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>Cart Page 🛒</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h2>Gaming Laptop</h2>

        <h3>₹50000</h3>

        <Link to="/checkout">
          <button
            style={{
              padding: "12px 25px",
              background: "#06b6d4",
              border: "none",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;