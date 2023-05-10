import React from "react";
import { LoadImage, LoadingContainer } from "./styled";
import loading from "../../assents/loading.png";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadImage src={loading} alt="loading" />
    </LoadingContainer>
  );
};

export default Loading;
