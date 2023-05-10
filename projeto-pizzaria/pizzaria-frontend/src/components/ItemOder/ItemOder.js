import { ItemOderContainer, UpContainer } from "./styled";

function ItemOder(props) {
  return (
    <ItemOderContainer>
      <UpContainer>
        <h3>
          {props.title} Quantidate:{props.quantity}
        </h3>
      </UpContainer>
      <h5> Valor Unitário :{props.price} </h5>
    </ItemOderContainer>
  );
}

export default ItemOder;
