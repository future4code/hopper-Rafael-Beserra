import React, { useState } from "react";

function CartFunction() {
  const [cart, setCart] = useState([]);
  const products = useRequestData(`${BASE_URL}/products`);

  // *****************************
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
    }
  };

  //   **************************************

  let cartPrice = 0;

  for (let item of cart) {
    cartPrice += Number(item.price * item.quantity);
  }

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
  };

  return <></>;
}

export default CartFunction;
