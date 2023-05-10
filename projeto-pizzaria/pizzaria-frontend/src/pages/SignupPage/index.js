import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SignUpForm from "./SignUpForm";
import { ScreenContainer, SignupPageContainer } from "./styled";

function SignupPage() {
  return (
    <SignupPageContainer>
      <Header />
      <ScreenContainer>
        <SignUpForm />
      </ScreenContainer>
      <Footer />
    </SignupPageContainer>
  );
}

export default SignupPage;
