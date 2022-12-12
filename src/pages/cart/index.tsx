import React, { FC, useMemo, useState } from 'react';
import { mockProducts } from 'mock';
import { Button, CartCard, OrderForm, ProductCard } from 'components';
import { ICartItem } from 'app';

type CartProps = {
  cartItems: ICartItem[];
  onProductSelect: (id?: number, price?: number, amount?: number) => void;
};

export const Cart: FC<CartProps> = ({ cartItems, onProductSelect }) => {
  let totalOrderValue = useMemo(() => {
    if (cartItems.length) {
      return cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    }

    return 0;
  }, [cartItems]);

  function renderSelectedProduct() {
    return mockProducts
      .filter((product) => cartItems.some((item) => item.id === product.id))
      .map((product) => (
        <li key={product.id} className='Order-details__list-item'>
          <CartCard
            viewType='cart'
            isSelected={true}
            onProductSelect={() => onProductSelect(product.id, product.price)}
            product={product}
          />
        </li>
      ));
  }

  return (
    <div className='Page-wrapper Cart'>
      <section className='Order-details'>
        {cartItems.length ? (
          <>
            <header className='Order-details__header'>
              <div>Товар</div>
              <div>К-во</div>
            </header>
            <ul className='Order-details__list'>{renderSelectedProduct()}</ul>
            <div className='Order-details__button-group'>
              <Button size='md' variance='outlined'>
                Очистить корзину
              </Button>
              <Button size='md' variance='solid'>
                Продолжить покупки
              </Button>
            </div>
          </>
        ) : (
          <>Добавьте товары в корзину</>
        )}
      </section>
      <OrderForm orderPrice={totalOrderValue} />
    </div>
  );
};
