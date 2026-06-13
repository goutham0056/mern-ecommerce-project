import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const placeOrder = () => {

    alert("Order Placed Successfully ✅");

    navigate("/");
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>Checkout Page</h1>

      <input
        type="text"
        placeholder="Enter Address"
        style={{
          width: "300px",
          padding: "12px",
          display: "block",
          marginTop: "20px",
        }}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        style={{
          width: "300px",
          padding: "12px",
          display: "block",
          marginTop: "20px",
        }}
      />

      <button
        onClick={placeOrder}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          background: "#06b6d4",
          border: "none",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;