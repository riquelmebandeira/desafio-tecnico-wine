import React from 'react';
import { accountIcon, cartIcon, searchIcon, wineLogo } from '../assets';
import ImageInput from './ImageInput';
import Header from '../styles/header';

const WineHeader: React.FC = () => (
    <Header>
      <div>
        <img src={wineLogo} alt="Logo da Wine" />
        <nav>
          <a>Clube</a>
          <a>Loja</a>
          <a>Produtores</a>
          <a>Ofertas</a>
          <a>Eventos</a>
        </nav>
        <div className="header-inputs">
          <ImageInput src={searchIcon} alt="Ícone de pesquisa" />
          <ImageInput src={accountIcon} alt="Ícone da conta" />
          <ImageInput src={cartIcon} alt="Ícone do carrinho" />
        </div>
      </div>
    </Header>
);

export default WineHeader;
