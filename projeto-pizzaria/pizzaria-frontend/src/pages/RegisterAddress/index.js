import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddressForm from "./addressForm";

import { RegisterAddressContainer, UsefulPageContainer } from "./styled";

function RegisterAddress() {
  return (
    <RegisterAddressContainer>
      <Header />
      <UsefulPageContainer>
        <AddressForm />
        <Footer />
      </UsefulPageContainer>
    </RegisterAddressContainer>
  );
}

export default RegisterAddress;
