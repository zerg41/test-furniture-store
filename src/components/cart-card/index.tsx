import React, { FC, useState } from 'react';
import { IMockProduct } from 'mock';

type CartCardProps = {
  product: IMockProduct;
  isSelected?: boolean;
  onProductSelect: (id: number) => void;
  viewType?: 'catalog' | 'cart';
};
export const CartCard: FC<CartCardProps> = ({ viewType, product, isSelected, onProductSelect }) => {
  function handleAddToCart(id: number) {
    onProductSelect(id);
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
          <button className='Cart-card__extra-button' onClick={() => handleAddToCart(product.id)}>
            Удалить
          </button>
        </div>
      </div>
      <div className='Cart-card__counter-container'>InP</div>
    </article>
  );
};
