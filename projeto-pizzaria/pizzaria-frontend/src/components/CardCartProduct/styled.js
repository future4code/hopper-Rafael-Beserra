import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  max-width: 450px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid red;
  background-color: white;
`;

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ImageProduct = styled.img`
  border-radius: 30%;
  width: 20%;
  height: 20%;
  margin-right: 10px;
`;

export const OneComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageADD = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

export const ImageADD1 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
