import styled from "styled-components";

const NavBar = (): JSX.Element => {
  return (
    <Nav>
      <a href="#">Collections</a>

      <a href="#">Men</a>

      <a href="#">Women</a>

      <a href="#">About</a>

      <a href="#">Contact</a>
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

    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    color: hsla(220, 9%, 45%, 1);
  }
`;
