import styled from "styled-components";
import burger from "../../assets/icon-menu.svg";
import closeImg from "../../assets/icon-close.svg";

interface burgerProps {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

const BurgerMenu = ({ menu, setMenu }: burgerProps): JSX.Element => {
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <BurgerCont menu={menu}>
      <button onClick={handleClick}>
        <img className="burger" src={burger} alt="" />
      </button>

      <Menu menu={menu}>
        <img
          className="close"
          src={closeImg}
          alt="Close icon"
          onClick={handleClick}
        />
        <div className="pageBar">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </Menu>
    </BurgerCont>
  );
};
export default BurgerMenu;

const BurgerCont = styled.div<{ menu: boolean }>`
  button {
    border: none;
    width: 16px;
    height: 15px;
    display: flex;
    align-items: center;
  }
`;

const Menu = styled.nav<{ menu: boolean }>`
  width: 66.7%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 54px;
  padding: 25px 0 0 25px;
  background-color: white;
  position: ${(props) => (props.menu ? "absolute" : "fixed")};
  left: ${(props) => (props.menu ? "0" : "-300%")};
  top: 0;
  z-index: 4;
  transform: translateX(${(props) => (props.menu ? "0%" : "-100%")});
  transition: transform 0.7s ease 0s;
  .close {
    width: 13.5px;
    height: 13.5px;
  }

  .pageBar {
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: #1d2026;
      text-decoration: none;
    }
  }
`;
