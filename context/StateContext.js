"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
const Context = createContext(null);

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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

  const totalcartQuantity = useMemo(() => {
    return cartItems.length;
  }, [cartItems]);
  // Check if a product exists in the cart
  const checkIfProductExists = (_id) => {
    return cartItems.some((item) => item._id === _id);
  };

  // Add product to cart
  const addToCart = (product,selectedColor) => {
    if (checkIfProductExists(product._id)) {
      console.log("Item already in cart");
      return;
    }
    setCartItems([...cartItems, { ...product, quantity: 1 ,selectedColor}])
  };
const handleSetColor = (id,selectedColor)=>{
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item._id == id ? { ...item, selectedColor } : item
    )
  );
  console.log("cartitem",cartItems)
}
  // Remove product from cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item._id !== product._id));
  };

  // Set quantity
  const setQuantity = (id, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: +newQty } : item
      )
    );
  };

  // Context value
  const value = {
    cartItems,
    totalPrice,
    totalQuantities,
    addToCart,
    removeFromCart,
    setQuantity,
    checkIfProductExists,
    totalcartQuantity,
    handleSetColor
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCart = () => useContext(Context);
