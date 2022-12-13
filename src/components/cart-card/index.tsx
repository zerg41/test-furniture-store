import React, { FC } from 'react';
// components
import { Counter } from 'components';
// data
import { IMockProduct } from 'mock';

type CartCardProps = {
  product: IMockProduct;
  onProductRemove: (id: number) => void;
  onAmountChange: (id: number, amount: number) => void;
};

export const CartCard: FC<CartCardProps> = ({ product, onProductRemove, onAmountChange }) => {
  let handleAmountChange = (amount: number) => {
    return onAmountChange(product.id, amount);
  };

  return (
    <article className='Cart-card'>
      <img src={product.imgSrc} alt={product.model} className='Cart-card__image' />
      <div className='Cart-card__body'>
        <div className='Cart-card__title'>{`${product.category} ${product.model}`}</div>
        <div className='Cart-card__description'>{product.description}</div>
        <div className='Cart-card__price'>{`${product.price.toLocaleString()} руб.`}</div>
        <div className='Cart-card__extra'>
          <button className='Cart-card__extra-button'>Избранные</button>
          <button className='Cart-card__extra-button' onClick={() => onProductRemove(product.id)}>
            Удалить
          </button>
        </div>
      </div>
      <div className='Cart-card__counter-container'>
        <Counter min={1} max={10} onChange={handleAmountChange} />
      </div>
    </article>
  );
};
