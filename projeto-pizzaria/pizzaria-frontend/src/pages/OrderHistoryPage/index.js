import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { BASE_URL } from "../../constants/urls";
import useRequestOrderHistory from "../../hooks/useRequestOrderHistory";
import { OrderHistoryPageContainer } from "./styled";

function OrderHistoryPage() {
  const orders = useRequestOrderHistory([], `${BASE_URL}/historico-de-pedidos`);

  return (
    <OrderHistoryPageContainer>
      <h1>HISTÓRICO DE PEDIDOS</h1>
      {orders &&
        orders.map((order) => {
          return (
            <OrderHistory
              key={order.id}
              id={order.id}
              date={order.createdAt}
              price={order.total_price}
            />
          );
        })}
    </OrderHistoryPageContainer>
  );
}

export default OrderHistoryPage;
