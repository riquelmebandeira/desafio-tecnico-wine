import styled from 'styled-components';

const Aside = styled.aside`
  max-width: 280px;
  width: 100%;

  .aside-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: black;
  }

  .price-filters-title {
    font-size: 18px;
    line-height: 22px;
    color: #333;
    margin: 0;
    margin-bottom: 10px;
  }

  .price-filters {
    display: flex;
    flex-direction: column;
  }

  label {
    cursor: pointer;
    color: #1D1D1B;
    margin: 10px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  @media (max-width: 1024px) {
    padding-left: 90px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Aside;
