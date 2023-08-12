import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductList from "./ProductList";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showcart, setShowcard] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (showcart) {
      navigate("/cartitems", { state: { cartItems: cartItems } });
    }
  }, [showcart]);

  if (loading) {
    return (
      <div>
        {/* Loading indicator */}
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

      <button className="btn btn-success" onClick={handleSubmit}>Show Cart</button>
    </div>
  );
};

export default Home;
