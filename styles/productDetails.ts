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

  .page-content {
    display: flex;
  }

  .desktop-image {
    max-width: 640px;
    max-height: 480px;
    width: 100%;
    object-fit: contain;
  }

  .mobile-image {
    display: none;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    width: 462.22px;
    row-gap: 30px;
  }

  h1 {
    margin: 10px auto;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #111111;
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

  .rating {
    display: flex;
    gap: 2px;
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

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    .return-button {
      display: none;
    }

    .mobile-image {
      display: block;
      max-width: 640px;
      max-height: 480px;
      margin: auto;
      width: 100%;
      object-fit: contain;
    }

    .desktop-image {
      display: none;
    }

    .product-details {
      width: auto;
    }

    .page-content {
      flex-direction: column;

      img {
        order: 2;
      }

      .price-container {
        order: 3;
      }

      .comment-container {
        order: 4;
      }
    }

    div:last-child {
      order: 5;
      margin: auto;
    }
  }
`;

export default ProductDetails;
