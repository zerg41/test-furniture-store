import React, { FC, useState } from 'react';
import { Counter } from 'components';
import { IMockProduct } from 'mock';

type CartCardProps = {
  product: IMockProduct;
  isSelected?: boolean;
  onProductSelect: (id: number, price: number) => void;
  viewType?: 'catalog' | 'cart';
};

export const CartCard: FC<CartCardProps> = ({ viewType, product, isSelected, onProductSelect }) => {
  function handleAddToCart(id: number, price: number) {
    onProductSelect(id, price);
  }

  return (
    <article className='Cart-card'>
      <img src={product.imgSrc} alt={product.model} className='Cart-card__image' />
      <div className='Cart-card__body'>
        <div className='Cart-card__title'>{`${product.category} ${product.model}`}</div>
        <div className='Cart-card__description'>{product.description}</div>
        <div className='Cart-card__price'>{`${product.price.toLocaleString()} руб.`}</div>
        <div className='Cart-card__extra'>
          <button className='Cart-card__extra-button'>Избранные</button>
          <button
            className='Cart-card__extra-button'
            onClick={() => handleAddToCart(product.id, product.price)}
          >
            Удалить
          </button>
        </div>
      </div>
      <div className='Cart-card__counter-container'>
        <Counter min={1} max={10} onChange={() => handleAddToCart(product.id, product.price)} />
      </div>
    </article>
  );
};
