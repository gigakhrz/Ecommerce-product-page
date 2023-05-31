import styled from "styled-components";
import productImg from "../../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../../assets/icon-delete.svg";

interface CartProps {
  cartDiv: boolean;
  setCartDiv: (cartDiv: boolean) => void;
  addedProducts: number;
  setAddedProducts: (addedProducts: number) => void;
}

const Cart = ({
  cartDiv,
  addedProducts,
  setAddedProducts,
  setCartDiv,
}: CartProps): JSX.Element => {
  const totalPrice = addedProducts * 125;
  return (
    <CartContaiener cartDiv={cartDiv}>
      <h3>Cart</h3>

      <hr />
      <ListOfProducts>
        {addedProducts === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <div className="product">
            <img src={productImg} alt="product photo" />

            <div className="titleAndPrice">
              <p>Fall Limited Edition Sneakers</p>
              <span>
                $125.00 x {addedProducts} <h5>${totalPrice.toFixed(2)}</h5>
              </span>
            </div>

            <img
              onClick={() => {
                setAddedProducts(0);
                setCartDiv(false);
              }}
              className="delete"
              src={deleteIcon}
              alt="delete icon"
            />
          </div>
        )}
      </ListOfProducts>
    </CartContaiener>
  );
};

export default Cart;

const CartContaiener = styled.div<{ cartDiv: boolean }>`
  position: ${(props) => (props.cartDiv ? "absolute" : "fixed")};
  top: ${(props) => (props.cartDiv ? "76px" : "-300%")};
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  min-width: 360px;
  max-width: 360px;
  height: 256px;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;
  right: 7.5px;
  z-index: 2;
  transform: translateY(${(props) => (props.cartDiv ? "0%" : "-10%")});
  transition: transform 0.5s ease-in-out;

  h3 {
    padding: 24px 0 0 24px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: hsla(220, 14%, 13%, 1);
    align-self: flex-start;
    margin-bottom: 3px;
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background-color: hsla(219, 35%, 92%, 1);
  }
`;

const ListOfProducts = styled.div`
  width: 100%;
  height: 164px;
  padding: 0 24px 32px;

  .empty {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    color: hsla(220, 9%, 45%, 1);
    text-align: center;
    margin-top: 43px;
  }

  .product {
    display: flex;
    gap: 16px;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }

    .titleAndPrice {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: hsla(220, 9%, 45%, 1);
      }

      span {
        display: flex;
        align-items: center;
        align-self: flex-start;
        gap: 4px;

        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: hsla(220, 9%, 45%, 1);

        h5 {
          font-size: 16px;
          font-weight: 700;
          line-height: 26px;
          color: hsla(220, 13%, 13%, 1);
        }
      }
    }

    .delete {
      width: 14px;
      height: 16px;
      cursor: pointer;
    }
  }
`;
