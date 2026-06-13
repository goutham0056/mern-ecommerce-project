import { useState } from "react";

function Admin() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Admin Panel</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>
        Add Product
      </button>

      {
        products.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => deleteProduct(item.id)}>
              Delete
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Admin;