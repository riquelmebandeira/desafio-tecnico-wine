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

  .wine-details {
    display: flex;

      img {
      width: 640px;
      height: 480px;
      object-fit: contain;
    }
  }

  .price-container {
    display: flex;
    flex-direction: column;

      span:first-child {
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
      display: flex;
      align-items: center;
      letter-spacing: -0.48675px;
      color: #C81A78;
    }

      span:last-child {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-feature-settings: 'liga' off;
      color: #888888;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 462.22px;
    height: 500px;
    row-gap: 30px;
  }

  .tags {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    gap: 8px;
    color: #555555;

      img {
      width: 16px;
      height: auto;
    }
  }

  .comment-container {
      h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }

      span {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #666666;
    }
  }
`;

export default ProductDetails;
