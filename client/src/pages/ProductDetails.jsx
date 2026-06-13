import {
  Link,
  useParams,
} from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >

      <h1
        style={{
          textAlign: "center",
        }}
      >
        Product Details
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          alt=""
          style={{
            width: "400px",
            borderRadius: "15px",
          }}
        />

        <div>

          <h1>Product ID : {id}</h1>

          <h2>Gaming Laptop</h2>

          <h2
            style={{
              color: "#06b6d4",
            }}
          >
            ₹50000
          </h2>

          <p
            style={{
              maxWidth: "400px",
              lineHeight: "1.7",
            }}
          >
            High Performance Gaming Laptop
            with Intel Processor and RGB
            Keyboard.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >

            <Link to="/checkout">

              <button
                style={{
                  padding: "15px 30px",
                  background: "#06b6d4",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>

            </Link>

            <Link to="/cart">

              <button
                style={{
                  padding: "15px 30px",
                  background: "#3b82f6",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;