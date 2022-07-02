import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { useRouter } from 'next/router';
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

const ProductList: React.FC<ProductListProps> = ({ products, totalPages }) => {
  const { query: { name, filter } } = useRouter();

  const PAGES_NUMBER = Array(totalPages).fill(1);

  return (
    <S.ProductList>
      {
        products.length < 1 ? <h2>Nenhum produto foi encontrado.</h2>
          : products.map((product, index: number) => <ProductCard key={index} {...product}/>)
      }
      <S.Pagination>
        {
          PAGES_NUMBER.map((_, index) => {
            const url = name ? `/?page=${index + 1}&name=${name}&filter=${filter}&limit=9`
              : `/?page=${index + 1}&filter=${filter}&limit=9`;

            return (
            <Link href={url}>
              <a>{index + 1}</a>
            </Link>
            );
          })
        }
      </S.Pagination>
    </S.ProductList>
  );
};

ProductList.propTypes = propTypes;

export default ProductList;
