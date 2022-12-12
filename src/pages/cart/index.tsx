import React, { FC, useMemo, useState } from 'react';
import { mockProducts } from 'mock';
import { OrderForm, ProductCard } from 'components';

type CartProps = {
  selectedProducts: number[];
  onProductSelect: (id: number) => void;
};

export const Cart: FC<CartProps> = ({ selectedProducts, onProductSelect }) => {
  let [totalProductValues, setTotalProductValues] = useState<number[]>([]);

  let totalOrderValue = useMemo(() => {
    if (totalProductValues.length) {
      return totalProductValues.reduce((total, productValue) => total + productValue, 0);
    }

    return 0;
  }, [totalProductValues]);

  function renderSelectedProduct() {
    return mockProducts
      .filter((product) => selectedProducts.includes(product.id))
      .map((product) => (
        <li key={product.id} className='Order-details__list-item'>
          <ProductCard isSelected={true} onProductSelect={onProductSelect} product={product} />
        </li>
      ));
  }

  return (
    <div className='Page-wrapper Cart'>
      <section className='Order-details'>
        <header className='Order-details__header'>
          <div>Товар</div>
          <div>К-во</div>
        </header>
        {selectedProducts.length ? (
          <ul className='Order-details__list'>{renderSelectedProduct()}</ul>
        ) : (
          <>Добавьте товары в корзину</>
        )}
      </section>
      <OrderForm orderPrice={totalOrderValue} />
    </div>
  );
};
