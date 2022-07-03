import React, { useState } from 'react';
import Link from 'next/link';
import { accountIcon, cartIcon, searchIcon, wineLogo } from '../assets';
import ImageInput from './ImageInput';
import * as S from '../styles';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <S.Header>
      <div>
        <Link href="/">
          <img src={wineLogo} alt="Logo da Wine" />
        </Link>
        <nav>
          <a>Clube</a>
          <a>Loja</a>
          <a>Produtores</a>
          <a>Ofertas</a>
          <a>Eventos</a>
        </nav>
        <div className="header-inputs">
          <ImageInput
            src={searchIcon}
            alt="Ícone de pesquisa"
            onClick={() => setToggle(!toggle)}
          />
          <ImageInput src={accountIcon} alt="Ícone da conta" />
          <ImageInput src={cartIcon} alt="Ícone do carrinho" />
        </div>
      </div>
    </S.Header>
    {
      toggle && <SearchBar />
    }
    </>
  );
};

export default Header;
