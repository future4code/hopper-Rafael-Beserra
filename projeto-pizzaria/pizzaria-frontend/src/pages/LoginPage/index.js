import React from "react";
import {
  LoginPageContainer,
  ScreenContainer,
  SignupButton,
  SignUpButtonContainer,
} from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginPageContainer>
      <Header />
      <ScreenContainer>
        <LoginForm />
        <SignUpButtonContainer>
          <SignupButton onClick={() => goToSignUpPage(navigate)} type="submit">
            NÃO POSSUI CONTA? CADASTRE-SE
          </SignupButton>
          {/* <a href="#">NÃO POSSUI CONTA? CADASTRE-SE</a> */}
        </SignUpButtonContainer>
      </ScreenContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
