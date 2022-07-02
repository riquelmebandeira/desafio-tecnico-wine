import styled from 'styled-components';

const SearchBar = styled.form`
  justify-content: center;
  display: flex;
  padding: 15px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 15%);
  gap: 10px;

  input {
    max-width: 1170px;
    width: 100%;
    height: 44px;
    border: none;
    text-indent: 15px;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

export default SearchBar;
