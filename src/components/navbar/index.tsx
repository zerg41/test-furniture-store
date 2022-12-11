import React, { FC } from 'react';
import { ReactComponent as CatalogIcon } from 'assets/icons/catalog-icon.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart-icon.svg';

type NavbarProps = {
  onLinkClick: (page: 'catalog' | 'cart') => void;
};

export const Navbar: FC<NavbarProps> = ({ onLinkClick }) => {
  return (
    <nav className='Navbar'>
      <div className='Navbar-brand'>Интерьер.</div>
      <ul className='Navbar-nav'>
        <li className='Nav-item'>
          <a href='#' className='Nav-item__link' onClick={() => onLinkClick('catalog')}>
            <span className='Nav-text'>Каталог</span>
            <span className='Nav-icon'>
              <CatalogIcon />
            </span>
          </a>
        </li>
        <li className='Nav-item'>
          <a href='#' className='Nav-item__link' onClick={() => onLinkClick('cart')}>
            <span className='Nav-text'>Корзина</span>
            <span className='Nav-icon'>
              <CartIcon />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
