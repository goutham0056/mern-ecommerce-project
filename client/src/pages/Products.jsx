import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },

  {
    id: 2,
    name: "Smart Phone",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },

  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },

  {
    id: 4,
    name: "Smart Watch",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },

  {
    id: 5,
    name: "Camera",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },

  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d",
  },

  {
    id: 7,
    name: "iPad",
    price: 60000,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
  },

  {
    id: 8,
    name: "Keyboard",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },

  {
    id: 9,
    name: "Mouse",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },

  {
    id: 10,
    name: "Monitor",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  },
];

function Products() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "30px",
      }}
    >

      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >

        {products.map((product) => (

          <div
            key={product.id}
            style={{
              background: "#1e293b",
              borderRadius: "15px",
              padding: "20px",
              color: "white",
            }}
          >

            <img
              src={product.image}
              alt=""
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2>{product.name}</h2>

            <h3
              style={{
                color: "#06b6d4",
              }}
            >
              ₹{product.price}
            </h3>

            <Link to={`/product/${product.id}`}>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#06b6d4",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;