import React, { useState } from 'react';
import Link from 'next/link';
import { accountIcon, cartIcon, menuIcon, searchIcon, wineLogo } from '../assets';
import * as S from '../styles';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <S.Header>
      <div className="main">
        <div className="menu-container">
          <img src={menuIcon} alt="Menu" className="hamburguer-menu" />
          <Link href="/">
            <img src={wineLogo} alt="Logo da Wine" className="logo" />
          </Link>
        </div>
        <nav>
          <a>Clube</a>
          <a>Loja</a>
          <a>Produtores</a>
          <a>Ofertas</a>
          <a>Eventos</a>
        </nav>
        <div className="header-icons">
          <img
            src={searchIcon}
            alt="Ícone de pesquisa"
            onClick={() => setToggle(!toggle)}
          />
          <img src={accountIcon} alt="Ícone da conta" className="account-icon" />
          <img src={cartIcon} alt="Ícone do carrinho" />
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
