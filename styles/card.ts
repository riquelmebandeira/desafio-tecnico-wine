import styled from 'styled-components';

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 333px;
  text-align: center;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  padding: 8px;
  row-gap: 10px;

  img {
    width: 198.57px;
    height: 178.13px;
    object-fit: contain;
    align-self: center;
  }

  a {
    color: #1D1D1B;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  .discount-container {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    gap: 8px;
    display: flex;
    justify-content: center;

      span:first-child {
      color: #888888;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      text-decoration-line: line-through;
    }

      span:nth-child(2) {
      align-self: center;
      color: white;
      background: #F79552;
      border-radius: 1.94677px;
      text-transform: uppercase;
      padding: 1.9px;
    }
  }

  .member-price {
    color: #1D1D1B;
    font-weight: 700;
    font-size: 11px;
    line-height: 10px;
    text-transform: uppercase;
  }

  .non-member-price {
    color: #888888;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }

  .price-highlight {
    font-size: 18px;
    line-height: 20px;
    color: #B6116E;
  }
`;

export default Card;
