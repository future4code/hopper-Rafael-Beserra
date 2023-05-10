import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemOder from "../../components/ItemOder/ItemOder";
import { ItemOrderPageContainer, UsefulPageContainer } from "./styled";
import useRequestItemOrder from "../../hooks/useRequestItemOrder";
import { BASE_URL } from "../../constants/urls";

function ItemOrderPage() {
  const orderid = useParams();

  const itens = useRequestItemOrder(
    [],
    `${BASE_URL}/search-itens/${orderid.orderid}`
  );

  return (
    <ItemOrderPageContainer>
      <Header />
      <UsefulPageContainer>
        <h3> Itens do Pedido </h3>
        {itens &&
          itens.map((item) => {
            return (
              <ItemOder
                key={item.id}
                title={item.item_title}
                price={item.item_price}
                totalPrice={item.total_price}
                quantity={item.quantity}
              />
            );
          })}
      </UsefulPageContainer>
      <Footer />
    </ItemOrderPageContainer>
  );
}

export default ItemOrderPage;
