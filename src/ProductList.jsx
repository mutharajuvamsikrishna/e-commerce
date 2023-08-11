import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductList = ({ cartItems, products, addToCart }) => {
  return (
    <>
      <div
        style={{
          float: "right",
        }}
      >
        <AiOutlineShoppingCart
          style={{
            height: "30px",
            width: "30px",
          }}
        />
        {cartItems.length}
      </div>

      <div style={{ marginTop: "50px" }}>
        {products.map((product, index) => {
          const productAddedToCart = cartItems.find(
            (p) => p?.id === product.id
          );
          return (
            <div key={index}>
              <div>{product.title}</div>
              <img
                src={product.image}
                style={{ width: "100px", height: "100px" }}
                alt={product.title}
              />
              <button onClick={() => addToCart(product)}>
                {productAddedToCart ? "Remove From Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
