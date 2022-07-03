import styled from 'styled-components';

const ProductAdder = styled.div`
  border: none;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  background-color: #7EBC43;
  border-radius: 3.8px;
  cursor: pointer;
  color: white;
  width: 328px;
  height: 56px;
  display: flex;

  .quantity-selectors {
    align-items: center;
    background-color: transparent;
    display: flex;
    width: 50%;
    justify-content: space-evenly;

    button {
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }

  .add-button {
    all: unset;
    margin: auto;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default ProductAdder;
