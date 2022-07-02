import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from '../styles';
import { pathResolver } from '../utils';

const propTypes = {
  totalPages: PropTypes.number.isRequired,
};

type PaginationProps = InferProps<typeof propTypes>;

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { query: { name, filter } } = useRouter();

  const PAGES_NUMBER = Array(totalPages).fill(1);

  return (
    <S.Pagination>
      {
        PAGES_NUMBER.map((_, index) => {
          const page = index + 1;
          const path = `/${pathResolver(page, name, filter)}`;

          return (
          <Link href={path}>
            <a>{index + 1}</a>
          </Link>
          );
        })
      }
    </S.Pagination>
  );
};

Pagination.propTypes = propTypes;

export default Pagination;
