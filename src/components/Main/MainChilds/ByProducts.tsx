import styled from "styled-components";
import plusIcon from "../../../assets/icon-plus.svg";
import minusIcon from "../../../assets/icon-minus.svg";

const Buy = (): JSX.Element => {
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
            <img src={minusIcon} alt="minus icon" />
          </button>
          <h5>0</h5>
          <button>
            <img src={plusIcon} alt="plus icon" />
          </button>
        </div>
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
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .salePrice {
    display: flex;
    align-items: center;
    gap: 24px;

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

  .count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f8fd;
    border-radius: 10px;
    width: 327px;
    padding: 26px 24px;

    h5 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
    }

    button {
      border: none;
    }
  }
`;
