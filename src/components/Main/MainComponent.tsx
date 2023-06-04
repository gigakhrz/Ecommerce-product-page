import styled from "styled-components";
import Slider from "./MainChilds/Slider";
import Description from "./MainChilds/Description";
import Buy from "./MainChilds/ByProducts";

interface MaincCompProps {
  count: number;
  setCount: (count: number) => void;
  addedProducts: number;
  setAddedProducts: (addedProducts: number) => void;
  openImg: boolean;
  setOpenImg: (openImg: boolean) => void;
}

const MainComponent = ({
  count,
  setCount,
  setAddedProducts,
  addedProducts,
  openImg,
  setOpenImg,
}: MaincCompProps): JSX.Element => {
  return (
    <MainCont>
      <Slider openImg={openImg} setOpenImg={setOpenImg} />

      <div className="container">
        <Description />
        <Buy
          count={count}
          setCount={setCount}
          setAddedProducts={setAddedProducts}
          addedProducts={addedProducts}
        />
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
  max-width: 550px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    min-width: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 1100px) {
    gap: 125px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;
