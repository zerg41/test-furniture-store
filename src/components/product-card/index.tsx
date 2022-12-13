import React, { FC, useState } from 'react';
// styles
import { ReactComponent as AddToCartIcon } from 'assets/icons/add-to-cart-icon.svg';
import { ReactComponent as AddToFavIcon } from 'assets/icons/add-to-fav-icon.svg';
// data
import { IMockProduct } from 'mock';

type ProductCardProps = {
  product: IMockProduct;
  isSelected: boolean;
  onProductSelect: () => void;
};
export const ProductCard: FC<ProductCardProps> = ({ product, isSelected, onProductSelect }) => {
  let [isExtraShown, setIsExtraShown] = useState(false);

  return (
    <article
      className='Product-card'
      onMouseEnter={() => setIsExtraShown(true)}
      onMouseLeave={() => setIsExtraShown(false)}
    >
      <img src={product.imgSrc} alt={product.model} className='Product-card__image' />
      <div className='Product-card__title'>{`${product.category} ${product.model}`}</div>
      <div className='Product-card__description'>{product.description}</div>
      <div className='Product-card__price'>{`${product.price.toLocaleString()} руб.`}</div>
      {isExtraShown && (
        <div className='Product-card__extra'>
          <button className='Product-card__extra-button'>
            <AddToFavIcon color='#c4c4c4' />
          </button>
          <button className='Product-card__extra-button' onClick={onProductSelect}>
            <AddToCartIcon color={isSelected ? 'red' : '#c4c4c4'} />
          </button>
        </div>
      )}
    </article>
  );
};
