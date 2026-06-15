import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const products = [

    {
      id: 1,
      name: "Gaming Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      description:
        "High Performance Gaming Laptop with Intel Processor and RGB Keyboard.",
    },

    {
      id: 2,
      name: "Smart Phone",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description:
        "Latest Android Smart Phone with AMOLED Display.",
    },

    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Wireless Headphones with Noise Cancellation.",
    },

    {
      id: 4,
      name: "Smart Watch",
      price: 4000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description:
        "Smart Watch with Health Tracking Features.",
    },

    {
      id: 5,
      name: "Camera",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      description:
        "Professional DSLR Camera with 4K Recording.",
    },

    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d",
      description:
        "Portable Bluetooth Speaker with Deep Bass Sound.",
    },

    {
      id: 7,
      name: "iPad",
      price: 60000,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      description:
        "Powerful iPad for Gaming and Productivity.",
    },

    {
      id: 8,
      name: "Keyboard",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      description:
        "Mechanical RGB Keyboard for Gaming.",
    },

    {
      id: 9,
      name: "Mouse",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
      description:
        "Wireless Gaming Mouse with High Precision.",
    },

    {
      id: 10,
      name: "Monitor",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      description:
        "Full HD Monitor with Ultra Slim Display.",
    },

  ];

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <h1 style={{ color: "white" }}>
        Product Not Found
      </h1>
    );
  }

  const handleBuyNow = () => {

    navigate("/checkout", {
      state: product,
    });

  };

  const handleAddToCart = () => {

    alert(`${product.name} Added To Cart`);

  };

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
          marginBottom: "50px",
        }}
      >
        Product Details
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >

        <img
          src={product.image}
          alt=""
          style={{
            width: "400px",
            borderRadius: "15px",
          }}
        />

        <div>

          <h1>{product.name}</h1>

          <h2
            style={{
              color: "#06b6d4",
            }}
          >
            ₹{product.price}
          </h2>

          <p
            style={{
              maxWidth: "450px",
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
            }}
          >

            <button
              onClick={handleBuyNow}
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

            <button
              onClick={handleAddToCart}
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

          </div>

          <div style={{ marginTop: "30px" }}>

            <Link
              to="/products"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
              }}
            >
              ← Back To Products
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;