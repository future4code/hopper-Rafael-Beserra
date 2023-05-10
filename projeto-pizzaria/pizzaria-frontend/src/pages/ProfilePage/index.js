import React from "react";
import AddressCard from "../../components/AddressCard/AddressCard";
import { ProfilePageContainer, UsefulPageContainer } from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRequestAddress from "../../hooks/useRequestAddress";
import { BASE_URL } from "../../constants/urls";
import OrderHistoryPage from "../OrderHistoryPage";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function ProfilePage() {
  useUnprotectedPage();
  const address = useRequestAddress([], `${BASE_URL}/user-address`);

  return (
    <ProfilePageContainer>
      <Header />
      <UsefulPageContainer>
        <AddressCard
          street={address.street}
          number={address.number}
          zipcode={address.zipcode}
        />
        <OrderHistoryPage />
      </UsefulPageContainer>
      <Footer />
    </ProfilePageContainer>
  );
}

export default ProfilePage;
