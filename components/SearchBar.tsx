import Link from 'next/link';
import React, { useState } from 'react';
import { searchIcon2 } from '../assets';
import * as S from '../styles';

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <S.SearchBar>
      <input placeholder="Pesquisar" onChange={({ target }) => setName(target.value)}/>
      <Link href={`/?name=${name}&limit=9`}>
        <button type="submit">
          <img src={searchIcon2} alt="ícone de pesquisa" />
        </button>
      </Link>
    </S.SearchBar>
  );
};

export default SearchBar;
