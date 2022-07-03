import styled from 'styled-components';

const ProductList = styled.div`
  display: flex;
  max-width: 832px;
  flex-flow: row wrap;
  gap: 32px;

  .product-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    max-width: 544px;
    margin: auto;
  }

  @media (max-width: 426px) {
    max-width: 256px;
  }
`;

export default ProductList;
