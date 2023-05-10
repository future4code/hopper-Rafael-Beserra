import { useNavigate } from "react-router-dom";
import { goToItemOrderPage } from "../../routes/coordinator";
import { OrderHistoryContainer } from "./styled";

function OrderHistory(props) {
  const navigate = useNavigate();

  return (
    <OrderHistoryContainer
      onClick={() => goToItemOrderPage(navigate, props.id)}
    >
      <h3>Data da compra: {props.date}</h3>
      <h3> Valor Total {props.price}</h3>
    </OrderHistoryContainer>
  );
}

export default OrderHistory;
