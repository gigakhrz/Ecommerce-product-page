import styled from "styled-components";

const NavBar = (): JSX.Element => {
  return (
    <Nav>
      <a href="#">
        Collections <div></div>
      </a>

      <a href="#">
        Men <div></div>
      </a>

      <a href="#">
        Women <div></div>
      </a>

      <a href="#">
        About <div></div>
      </a>

      <a href="#">
        Contact <div></div>
      </a>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 1024px) {
    display: flex;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    position: relative;

    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    color: hsla(220, 9%, 45%, 1);

    div {
      width: 100%;
      height: 4px;
      background: #ff7e1b;
      position: absolute;
      left: 0;
      bottom: -58px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease 0s;
    }
  }

  a:hover div {
    transform: scaleX(1);
  }
`;
