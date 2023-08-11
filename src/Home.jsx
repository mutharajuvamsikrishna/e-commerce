import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductList from "./ProductList";
import CartItems from "./CartItems"; // Import the CartItems component

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showcart, setShowcard] = useState(false);
  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productFromBe) => {
        setProducts(productFromBe);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addToCart = (product) => {
    const previouslyAdded = cartItems.find((p) => p?.id === product.id);

    if (!previouslyAdded) {
      setCartItems((previousCartItems) => [...previousCartItems, product]);
    } else {
      const filterCartItems = cartItems.filter(
        (p) => p?.id !== previouslyAdded?.id
      );

      setCartItems(filterCartItems);
    }
  };

  const handleSubmit = () => {
    setShowcard(true);
  };

  if (showcart) {
    return (
      <div>
        {" "}
        <CartItems cartItems={cartItems} addToCart={addToCart} />
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <br />
        <br />
        <br></br>
        <br />
        <br />
        <center>
          <h1>Loading.....</h1>
        </center>
      </div>
    );
  }
  return (
    <div>
      <ProductList
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
      />

      <button onClick={handleSubmit}>Show Cart</button>
    </div>
  );
};

export default Home;
