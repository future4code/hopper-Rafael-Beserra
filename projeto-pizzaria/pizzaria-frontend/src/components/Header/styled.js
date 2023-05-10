import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-between;
  position: fixed !important;
  height: 50px;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
`;

export const ButtonHeaderLeft = styled.button`
  background-color: transparent;
  border: transparent;
  color: white;
  margin: 0px 0px 0px 30px;
  cursor: pointer;
`;

export const ButtonHeaderRight = styled.button`
  background-color: transparent;
  border: transparent;
  color: white;
  cursor: pointer;
`;

export const GroupButton = styled.div`
  display: flex;
  margin: 0px 10px 0px 0px;
`;
