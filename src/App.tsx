import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container></Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media screen and (min-width: 1024px) {
    gap: 90px;
  }
`;
