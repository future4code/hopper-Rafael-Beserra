import { ProfileCardContainer } from "./styled";

function AddressCard(props) {
  return (
    <ProfileCardContainer>
      <h2>
        {" "}
        <strong> ENDEREÇO CADASTRADO </strong>{" "}
      </h2>
      <p>Rua: {props.street}</p>
      <p>Numero: {props.number}</p>
      <p>cep: {props.zipcode}</p>
    </ProfileCardContainer>
  );
}

export default AddressCard;
