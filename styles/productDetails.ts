import styled from 'styled-components';

const ProductDetails = styled.main`
  margin: auto;
  max-width: 1200px;
  padding-top: 32px;

  .return-button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 93px;
    height: 24px;
    gap: 8px;
  }

  h1 {
    margin: 10px auto;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #111111;
  }

  .rating {
    display: flex;
    gap: 2px;
  }

  .wine-details img {
    width: 640px;
    height: 480px;
    object-fit: contain;
  }

  .wine-details {
    display: flex;
  }

  .price-container {
    display: flex;
    flex-direction: column;
  }

  .price-container span:first-child {
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.48675px;
    color: #C81A78;
  }

  .price-container span:last-child {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-feature-settings: 'liga' off;
    color: #888888;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 462.22px;
    height: 500px;
    row-gap: 30px;
  }

  .tags img {
    width: 16px;
    height: auto;
  }

  .tags {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    gap: 8px;
    color: #555555;
  }

  .comment-container span {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #666666;
  }

  .comment-container h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default ProductDetails;
