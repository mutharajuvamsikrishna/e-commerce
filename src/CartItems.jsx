import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useNavigate, useLocation, Link } from 'react-router-dom';

const CartItems = () => {

  const [count, setCount] = useState(1);

  const location = useLocation();
  console.log(location);

  // Access the data object passed from the previous route, if available
  const cartItems = location.state.cartItems;
console.log(cartItems)


  const [totalPrices, setTotalPrices] = useState(
    cartItems.map((product) => product.price)
  );

  const handleCountChange = (newCount, index) => {
     const updatedTotalPrices = [...totalPrices];
    updatedTotalPrices[index] = newCount * cartItems[index].price;

    setCount(newCount);
    setTotalPrices(updatedTotalPrices);
  };

  return (
    <>
    <h1 className="text-center">Cart Items</h1>
    <h2 className="text-center">No Of Items are {cartItems.length}</h2>
      <div
        style={{
          float: "right",
        }}
      >
        <AiOutlineShoppingCart
          style={{
            height: "30px",
            width: "30px",
            color:"blue",
          }}
        />
        {cartItems.length}
      </div>

      <div style={{ marginTop: "50px" }}>
        {cartItems.map((product, index) => {
          const productAddedToCart = cartItems.find(
            (p) => p?.id === product.id
          );
          return (
            <div key={index}>
              <div>{product.title}</div>
              <div>
                <img
                  src={product.image}
                  style={{ width: "100px", height: "100px" }}
                  alt={product.title}
                />
              </div>
              <div>{product.price}</div>
              <br />
              <AiOutlinePlus
                onClick={() => handleCountChange(count + 1, index)}
                style={{
                  height: "30px",
                  width: "30px",
                  color:"blue",
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              {count}

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AiOutlineMinus
                onClick={() => {
                  if (count > 1) {
                    handleCountChange(count - 1, index);
                  }
                }}
                style={{
                  height: "30px",
                  width: "30px",
                  color:"blue",
                }}
              />
              <br />

              <div>Total Price: {totalPrices[index]}</div>

              <button onClick={() => addToCart(product)}>
                {productAddedToCart ? "Remove From Cart" : "Add to Cart"}
              </button>
              <br/><br/>
              <a href="/">Go Back</a>
            </div>
            
          );
        })}
      </div>
    </>
  );
};

export default CartItems;
