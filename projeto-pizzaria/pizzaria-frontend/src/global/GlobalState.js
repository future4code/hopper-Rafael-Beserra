import React, { useState } from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const recipes = useRequestData([], `${BASE_URL}/cardapio`);

  let cartPrice = 0;

  for (let item of cart) {
    cartPrice += Number(item.price * item.quantity);
  }

  const addToCart = (product) => {
    const index = cart.findIndex((productInCart) => {
      if (productInCart.id === product.id) {
        return true;
      } else {
        return false;
      }
    });

    if (index === -1) {
      const productWithQuantity = {
        ...product,
        quantity: 1,
      };
      const cartCopy = [...cart, productWithQuantity];

      setCart(cartCopy);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cartCopy = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: productInCart.quantity + 1,
          };
        } else {
          return productInCart;
        }
      });
      setCart(cartCopy);
      alert("item adicionado");
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const removeProductFromCart = (product) => {
    const cartCopy = cart
      .map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: productInCart.quantity - 1,
          };
        } else {
          return productInCart;
        }
      })
      .filter((productInCart) => {
        if (productInCart.quantity === 0) {
          return false;
        } else {
          return true;
        }
      });

    setCart(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const states = {
    cart,
    recipes,
  };

  const setters = {
    setCart,
  };

  const requests = {
    addToCart,
    removeProductFromCart,
  };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
