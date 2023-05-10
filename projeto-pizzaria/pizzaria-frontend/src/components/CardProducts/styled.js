import styled from "styled-components";

export const CardProductsContainer = styled.div`
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

export const OneComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProduct = styled.img`
  border-radius: 30%;
  width: 20%;
  height: 20%;
  margin-right: 10px;
`;

export const ImageADD = styled.img`
  width: 7%;
  height: 20%;
  margin-left: 5px;
`;

export const ImageADD1 = styled.img`
  width: 7%;
  height: 20%;
  margin-left: 5px;
`;

export const Quantity = styled.div`
  width: 7%;
  height: 20%;
  margin-left: 5px;
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  margin-right: 30px;
  margin-bottom: 10px;
`;

export const CardProductArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
