import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonHeaderLeft,
  GroupButton,
  HeaderContainer,
  ButtonHeaderRight,
} from "./styled";
import {
  goToCartPage,
  goToHomePage,
  goToProfilePage,
} from "../../routes/coordinator";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ButtonHeaderLeft onClick={() => goToHomePage(navigate)}>
        HOME
      </ButtonHeaderLeft>

      <GroupButton>
        <ButtonHeaderRight onClick={() => goToProfilePage(navigate)}>
          {" "}
          CADASTRO{" "}
        </ButtonHeaderRight>
        <ButtonHeaderRight onClick={() => goToCartPage(navigate)}>
          CARRINHO
        </ButtonHeaderRight>
      </GroupButton>
    </HeaderContainer>
  );
};

export default Header;
