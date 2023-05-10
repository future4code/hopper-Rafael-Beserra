import {
  AdminCard,
  AdminProductContainer,
  ButtonCard,
  EditButton,
  RemoveButton,
  TitleCard,
} from "./styled";

function AdminCardProduct(props) {
  const { title, id } = props.product;

  return (
    <AdminProductContainer>
      <AdminCard>
        <TitleCard>
          <h1>{title}</h1>
        </TitleCard>
        <ButtonCard>
          <EditButton>
            <h3>EDITAR</h3>
          </EditButton>
          <RemoveButton onClick={props.onclickRemove}>
            <h3>REMOVER</h3>
          </RemoveButton>
        </ButtonCard>
      </AdminCard>
    </AdminProductContainer>
  );
}

export default AdminCardProduct;
