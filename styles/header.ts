import styled from 'styled-components';

const Header = styled.header`
  box-shadow: 0 6px 10px -10px gray;

  div:first-child {
  display: flex;
  width: 1200px;
  margin: auto;
  height: 88.23px;
  top: -1px;
  justify-content: space-around;
  }

  img {
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
    color: #555555
  }

  nav a {
    cursor: pointer;
  }

  .header-inputs {
    display: flex;

    input {
      width: 56px;
      margin: 16px 20px;
    }
  }
`;

export default Header;
