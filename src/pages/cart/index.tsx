import React, { FC } from 'react';
import { mockProducts } from 'mock';
import { ProductCard } from 'components';

type CartProps = {
  selectedProducts: number[];
  onProductSelect: (id: number) => void;
};

export const Cart: FC<CartProps> = ({ selectedProducts, onProductSelect }) => {
  function renderSelectedProduct() {
    return mockProducts
      .filter((product) => selectedProducts.includes(product.id))
      .map((product) => (
        <li>
          <ProductCard isSelected={true} onProductSelect={onProductSelect} product={product} />
        </li>
      ));
  }

  return (
    <div className='Page-wrapper Cart'>
      <section className='Cart-menu'>
        <header className='Cart-menu__header'>
          <div>Товар</div>
          <div>К-во</div>
        </header>
        {selectedProducts.length ? (
          <ul className='Cart-menu__list'>{renderSelectedProduct()}</ul>
        ) : (
          <>Добавьте товары в корзину</>
        )}
      </section>
      <form className='Cart-form'>DAsd</form>
    </div>
  );
};
