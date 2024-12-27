import React from "react";

const handleDecrement = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const productIndex = prevCart.findIndex((item) => item.product.name === product.name);
      if (productIndex !== -1 && newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity -= 1;
      }
      return newCart;
    });
  };

  export default handleDecrement;