import styled from 'styled-components';

const Header = styled.header`
  box-shadow: 0 6px 10px -10px gray;
  width: 100%;

  .main {
    display: flex;
    max-width: 1200px;
    margin: auto;
    height: 88.23px;
    top: -1px;
    justify-content: space-between;
  }

  .menu-container {
    display: flex;
  }

  img, a {
    cursor: pointer;
  }

  .logo, .hamburguer-menu {
    align-self: center;
    width: 102.95px;
    height: 31px;
    top: 28px;
  }

  nav {
    align-self: center;
    display: flex;
    width: 479px;
    gap: 48px;
    justify-content: space-around;
    color: #555555;
  }

  .header-icons {
    display: flex;
    gap: 40px;

    img {
      width: 56px;
      height: auto;
    }
  }

  .hamburguer-menu {
    display: none;
  }

  @media (max-width: 1024px) {
    .main {
      padding: 0 24px;
    }
  }

  @media (max-width: 768px) {
    nav, .account-icon {
      display: none;
    }

    .hamburguer-menu {
      display: inline;
    }

    .logo {
      width: 80px;
    }

    .hamburguer-menu {
      width: 24px;
    }

    .menu-container {
      gap: 20px;
    }

    .header-icons {
      gap: 20px;
    }
  }
`;

export default Header;
