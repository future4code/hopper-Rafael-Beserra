import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import {
  ApproveOrderPageContainer,
  ButtonPurchase,
  TotalPriceContainer,
} from "./styled";
import useRequestAddress from "../../hooks/useRequestAddress";
import { BASE_URL } from "../../constants/urls";
import AddressCard from "../../components/AddressCard/AddressCard";
import { checkout } from "../../services/purchase";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function ApproveOrderPage() {
  useUnprotectedPage();
  const address = useRequestAddress([], `${BASE_URL}/user-address`);
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);
  const { cart } = states;

  let cartPrice = 0;

  for (let item of cart) {
    cartPrice += Number(item.price * item.quantity);
  }

  return (
    <ApproveOrderPageContainer>
      <Header />
      <TotalPriceContainer>
        <p>
          <strong>Valor Total:</strong> {cartPrice}
        </p>
      </TotalPriceContainer>
      <AddressCard
        street={address.street}
        number={address.number}
        zipcode={address.zipcode}
      />
      <ButtonPurchase onClick={() => checkout(cart, navigate, cartPrice)}>
        FINALIZAR PEDIDO
      </ButtonPurchase>
      <Footer />
      <Footer />
    </ApproveOrderPageContainer>
  );
}

export default ApproveOrderPage;
