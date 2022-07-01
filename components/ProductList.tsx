import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Link from 'next/link';
import * as S from '../styles';
import ProductCard from './ProductCard';

/**
 * I was struggling to name the stylized components and i really liked this approach:
 * https://medium.com/inturn-eng/naming-styled-components-d7097950a245
 */

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  totalPages: PropTypes.number.isRequired,
};

type ProductListProps = InferProps<typeof propTypes>;

const ProductList: React.FC<ProductListProps> = ({ products, totalPages }) => (
  <S.ProductList>
    {
      products.map((product, index: number) => <ProductCard key={index} {...product}/>)
    }
    <S.Pagination>
      {
        Array(totalPages).fill(1).map((_, index) => (
          <Link href={`/?page=${index + 1}`}>
            <a>{index + 1}</a>
          </Link>
        ))
      }
    </S.Pagination>
  </S.ProductList>
);

ProductList.propTypes = propTypes;

export default ProductList;
