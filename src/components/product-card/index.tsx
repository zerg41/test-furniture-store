import React, { FC, useState } from 'react';
import { ReactComponent as AddToCartIcon } from 'assets/icons/add-to-cart-icon.svg';
import { ReactComponent as AddToFavIcon } from 'assets/icons/add-to-fav-icon.svg';
import { IMockProduct } from 'mock';

type ProductCardProps = {
  product: IMockProduct;
  isSelected: boolean;
  onProductSelect: (id: number, price: number) => void;
  viewType?: 'catalog' | 'cart';
};
export const ProductCard: FC<ProductCardProps> = ({
  viewType,
  product,
  isSelected,
  onProductSelect,
}) => {
  let [isExtraShown, setIsExtraShown] = useState(false);

  function handleAddToCart(id: number, price: number) {
    onProductSelect(id, price);
  }

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
            <AddToFavIcon />
          </button>
          <button
            className='Product-card__extra-button'
            onClick={() => handleAddToCart(product.id, product.price)}
          >
            <AddToCartIcon color={isSelected ? 'red' : '#c4c4c4'} />
          </button>
        </div>
      )}
    </article>
  );
};
