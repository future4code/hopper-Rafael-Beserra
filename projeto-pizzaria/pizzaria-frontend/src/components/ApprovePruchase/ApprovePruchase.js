import { ApprovePruchaseContainer } from "./styled";

function ApprovePruchase(props) {
  return (
    <ApprovePruchaseContainer>
      <p>
        <strong>Valor Total:</strong> {props.totalPrice}
      </p>
    </ApprovePruchaseContainer>
  );
}

export default ApprovePruchase;
