import styled from "styled-components";
import logoImg from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";
import BurgerMenu from "./HeaderChilds/BurgerMenu";
import { useState } from "react";
import Cart from "./HeaderChilds/Cart";
import NavBar from "./HeaderChilds/NavBar";

export interface headerProps {
  addedProducts: number;
  setAddedProducts: (addedProducts: number) => void;
}

const Header = ({
  addedProducts,
  setAddedProducts,
}: headerProps): JSX.Element => {
  //this usestate is fro burger menu
  const [menu, setMenu] = useState<boolean>(false);
  const [cartDiv, setCartDiv] = useState<boolean>(false);

  const handleLogoClick = () => {
    window.location.reload(); // reloads the page
  };

  const handleCartClick = () => {
    setCartDiv(!cartDiv);
  };

  return (
    <Container>
      <HeaderContainer menu={menu} addedProducts={addedProducts}>
        <div className="opacity"></div>
        <div className="container">
          <BurgerMenu setMenu={setMenu} menu={menu} />
          <img src={logoImg} onClick={handleLogoClick} alt="Ecomerce logo" />
          <NavBar />
        </div>

        <Cart
          cartDiv={cartDiv}
          setAddedProducts={setAddedProducts}
          addedProducts={addedProducts}
          setCartDiv={setCartDiv}
        />

        <div className="userContainer">
          <svg
            onClick={handleCartClick}
            className="cartSvg"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          <div className="productCount">{addedProducts}</div>
          <img className="avatar" src={avatar} alt="avatar img" />
        </div>
      </HeaderContainer>
      <hr />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 45px;

  hr {
    display: none;
    border: none;
    height: 1px;
    width: 77%;
    background-color: hsla(219, 35%, 92%, 1);
    align-self: center;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`;

const HeaderContainer = styled.div<{ menu: boolean; addedProducts: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 24px 0;
  max-width: 550px;
  position: relative;
  @media screen and (min-width: 1024px) {
    max-width: 100%;
    justify-content: space-around;
    margin-top: 28px;
    padding: 0;
  }

  .opacity {
    min-width: 100%;
    min-height: 100vh;
    position: absolute;
    display: ${(props) => (props.menu ? "block" : "none")};
    background: hsla(0, 0%, 0%, 0.75);
    z-index: 2;
    top: 0;
    left: 0;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen and (min-width: 1024px) {
      gap: 56.5px;
    }
  }

  .cartSvg {
    position: relative;
  }
  .productCount {
    display: ${(props) => (props.addedProducts === 0 ? "none" : "flex")};
    width: 19px;
    height: 13px;
    position: absolute;
    background: #ff7e1b;
    border-radius: 6.5px;
    top: 15px;
    right: 65px;

    align-items: center;
    justify-content: center;

    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    color: white;
  }

  .userContainer {
    display: flex;
    align-items: center;
    gap: 22.2px;

    .avatar {
      width: 24px;
      height: 24px;
    }
  }
`;
