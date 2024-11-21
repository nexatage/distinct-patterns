"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  // Initialize cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Derived states: total price and total quantities
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalQuantities = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  // Check if a product exists in the cart
  const checkIfProductExists = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Add product to cart
  const addToCart = (product) => {
    if (checkIfProductExists(product.id)) {
      console.log("Item already in cart");
      return;
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  // Set quantity
  const setQuantity = (newQty) => {
    setQty(newQty);
  };

  // Context value
  const value = {
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    addToCart,
    removeFromCart,
    setQuantity,
    checkIfProductExists,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCart = () => useContext(Context);
