import { useContext } from "react";
import { CartContext } from "../tempcontext/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;