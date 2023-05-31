import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import MainComponent from "./components/Main/MainComponent";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [addedProducts, setAddedProducts] = useState<number>(0);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header
          setAddedProducts={setAddedProducts}
          addedProducts={addedProducts}
        />
        <MainComponent
          count={count}
          setCount={setCount}
          setAddedProducts={setAddedProducts}
          addedProducts={addedProducts}
        />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  background-color: white;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1024px) {
    gap: 90px;
    margin-bottom: 0;
  }
`;
