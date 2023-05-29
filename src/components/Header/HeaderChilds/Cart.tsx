import styled from "styled-components";

interface CartProps {
  cartDiv: boolean;
}

const Cart = ({ cartDiv }: CartProps): JSX.Element => {
  return (
    <CartContaiener cartDiv={cartDiv}>
      <h3>Cart</h3>

      <hr />
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

  transform: translateY(${(props) => (props.cartDiv ? "0%" : "-20%")});
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
