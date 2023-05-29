import styled from "styled-components";
import Slider from "./MainChilds/Slider";
import Description from "./MainChilds/Description";
import Buy from "./MainChilds/ByProducts";

const MainComponent = (): JSX.Element => {
  return (
    <MainCont>
      <Slider />
      <div className="container">
        <Description />
        <Buy />
      </div>
    </MainCont>
  );
};

export default MainComponent;

const MainCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;
