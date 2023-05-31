import styled from "styled-components";
import plusIcon from "../../../assets/icon-plus.svg";
import minusIcon from "../../../assets/icon-minus.svg";

import { MaincCompProps } from "../MainComponent";

const Buy = ({
  count,
  setCount,
  setAddedProducts,
  addedProducts,
}: MaincCompProps): JSX.Element => {
  const minus = (): void => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const plus = (): void => {
    setCount(count + 1);
  };
  return (
    <BuyContainer>
      <Price>
        <div className="salePrice">
          <h2>$125.00</h2>
          <div className="sale">50%</div>
        </div>

        <h4>
          $250 <hr />
        </h4>
      </Price>

      <AddToCart>
        <div className="count">
          <button>
            <img src={minusIcon} alt="minus icon" onClick={minus} />
          </button>
          <h5>{count}</h5>
          <button>
            <img src={plusIcon} alt="plus icon" onClick={plus} />
          </button>
        </div>

        <button
          className="add"
          onClick={() => {
            setAddedProducts(addedProducts + count);
            setCount(0);
          }}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fill-rule="nonzero"
            />
          </svg>
          <h3>Add to cart</h3>
        </button>
      </AddToCart>
    </BuyContainer>
  );
};

export default Buy;

const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 0 24px;
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
  .salePrice {
    display: flex;
    align-items: center;
    gap: 24px;
    @media screen and (min-width: 1024px) {
      align-self: flex-start;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      color: hsla(220, 14%, 13%, 1);
    }

    .sale {
      width: 51px;
      height: 27px;
      background: #ffeee2;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: hsla(26, 100%, 55%, 1);
    }
  }

  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    color: hsla(220, 14%, 75%, 1);
    position: relative;
    @media screen and (min-width: 1024px) {
      align-self: flex-start;
    }

    hr {
      position: absolute;
      top: 50%;
      border: none;
      height: 1px;
      width: 100%;
      background-color: hsla(220, 14%, 75%, 1);
    }
  }
`;

const AddToCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: 445px;
  }

  .count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f8fd;
    border-radius: 10px;
    width: 100%;
    height: 56px;
    padding: 0 24px;
    @media screen and (min-width: 1024px) {
      max-width: 157px;
      padding: 0 16px;
    }

    h5 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
    }

    button {
      border: none;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .add {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #ff7e1b;
    box-shadow: 0px 20px 50px -20px #ff7e1b;
    border-radius: 10px;
    width: 100%;
    height: 56px;
    gap: 15.5px;

    h3 {
      font-family: Kumbh Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: white;
    }
  }
`;
