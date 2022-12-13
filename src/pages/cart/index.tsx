import React, { FC } from 'react';
// components
import { Button, CartCard, OrderForm } from 'components';
// data
import { mockProducts } from 'mock';
// utils
import { ICartItem } from 'types';

type CartProps = {
  selectedItems: ICartItem[];
  onProductRemove: (id: number) => void;
  onAmountChange: (id: number, amount: number) => void;
  onCleanCart: () => void;
};

export const Cart: FC<CartProps> = ({
  selectedItems,
  onProductRemove,
  onAmountChange,
  onCleanCart,
}) => {
  let totalOrderValue = selectedItems.reduce((total, item) => total + item.price * item.amount, 0);

  function renderSelectedProduct() {
    return mockProducts
      .filter((product) => selectedItems.some((item) => item.id === product.id))
      .map((product) => (
        <li key={product.id} className='Order-details__list-item'>
          <CartCard
            onProductRemove={onProductRemove}
            onAmountChange={onAmountChange}
            product={product}
          />
        </li>
      ));
  }

  return (
    <div className='Page-wrapper Cart'>
      <section className='Order-details'>
        {selectedItems.length ? (
          <>
            <header className='Order-details__header'>
              <div>Товар</div>
              <div>К-во</div>
            </header>
            <ul className='Order-details__list'>{renderSelectedProduct()}</ul>
            <div className='Order-details__button-group'>
              <Button size='md' variance='outlined' onClick={onCleanCart}>
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
