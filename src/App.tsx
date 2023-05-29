import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import MainComponent from "./components/Main/MainComponent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainComponent />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: white;
  @media screen and (min-width: 1024px) {
    gap: 90px;
  }
`;
