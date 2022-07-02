import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import * as S from '../styles';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

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
        products.length < 1 ? <h2>Nenhum produto foi encontrado.</h2>
          : products.map((product, index: number) => <ProductCard key={index} {...product}/>)
      }
      <Pagination totalPages={totalPages} />
    </S.ProductList>
);

ProductList.propTypes = propTypes;

export default ProductList;
