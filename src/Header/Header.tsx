import styled from "styled-components";
import logoImg from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = (): JSX.Element => {
  //this usestate is fro burger menu
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <HeaderContainer menu={menu}>
      <div className="opacity"></div>
      <div className="container">
        <BurgerMenu setMenu={setMenu} menu={menu} />
        <img src={logoImg} alt="Ecomerce logo" />
      </div>

      <div className="userContainer">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        <img className="avatar" src={avatar} alt="avatar img" />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ menu: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 24px 0;

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