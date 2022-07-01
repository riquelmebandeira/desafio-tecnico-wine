import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Link from 'next/link';
import Pagination from '../styles/pagination';
import ProductCard from './ProductCard';
import Container from '../styles/productList';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  totalPages: PropTypes.number.isRequired,
};

type ProductListProps = InferProps<typeof propTypes>;

const ProductList: React.FC<ProductListProps> = ({ products, totalPages }) => (
  <Container>
    {
      products.map((product, index: number) => <ProductCard key={index} {...product}/>)
    }
    <Pagination>
      {
        Array(totalPages).fill(1).map((_, index) => (
          <Link href={`/?page=${index + 1}`}>
            <a>{index + 1}</a>
          </Link>
        ))
      }
    </Pagination>
  </Container>
);

ProductList.propTypes = propTypes;

export default ProductList;
