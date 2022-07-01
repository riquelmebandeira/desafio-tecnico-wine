import styled from 'styled-components';

const ProductList = styled.div`
  display: flex;
  max-width: 832px;
  height: 1225px;
  flex-flow: row wrap;
  gap: 32px;

  .product-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export default ProductList;
