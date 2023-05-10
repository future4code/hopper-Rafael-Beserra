import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardCartProduct from "../../components/CardCartProduct/CardCartProduct";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { goToApprovePurchase } from "../../routes/coordinator";
import {
  ButtonPurchase,
  CardsCartListContainer,
  UpComponent,
  UsefulPageContainer,
} from "./styled";

const CartPage = () => {
  const navigate = useNavigate();
  const { states, requests } = useContext(GlobalContext);

  const { cart } = states;
  const { addToCart } = requests;
  const { removeProductFromCart } = requests;

  let cartPrice = 0;

  for (let item of cart) {
    cartPrice += Number(item.price * item.quantity);
  }

  return (
    <CardsCartListContainer>
      <Header />
      <UsefulPageContainer>
        <UpComponent>
          {/* <strong><p>Total: {cartPrice},00 </p></strong> */}
          <h3>Total: {cartPrice},00</h3>
          <ButtonPurchase onClick={() => goToApprovePurchase(navigate)}>
            COMPRAR
          </ButtonPurchase>
        </UpComponent>
        {cart &&
          cart.map((product) => {
            return (
              <CardCartProduct
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                quantity={product.quantity}
                price={product.price}
                product={product}
                addToCart={addToCart}
                removeProductFromCart={removeProductFromCart}
              />
            );
          })}
      </UsefulPageContainer>
      <Footer />
    </CardsCartListContainer>
  );
};

export default CartPage;
