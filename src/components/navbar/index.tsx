import React, { FC } from 'react';
// styles
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
            <span className='Nav-item__text'>Каталог</span>
            <span className='Nav-item__icon'>
              <CatalogIcon />
            </span>
          </a>
        </li>
        <li className='Nav-item'>
          <a href='#' className='Nav-item__link' onClick={() => onLinkClick('cart')}>
            <span className='Nav-item__text'>Корзина</span>
            <span className='Nav-item__icon'>
              <CartIcon />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
