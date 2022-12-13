import React, { FC, useState } from 'react';
// components
import { ProductCard } from 'components';
// data
import { mockProducts } from 'mock';
// utils
import { ICartItem } from 'types';

const OrderKeyword = {
  NONE: 'none',
  ASC: 'asc',
  DESC: 'desc',
} as const;

type OrderByOption = typeof OrderKeyword[keyof typeof OrderKeyword];

type CatalogProps = {
  selectedItems: ICartItem[];
  addProduct: (id: number, price: number) => void;
  removeProduct: (id: number) => void;
};

export const Catalog: FC<CatalogProps> = ({ selectedItems, addProduct, removeProduct }) => {
  let [orderBy, setOrderBy] = useState<OrderByOption>(OrderKeyword.ASC);

  function handleFilterSelect(evt: React.ChangeEvent<HTMLSelectElement>) {
    setOrderBy(evt.target.value as OrderByOption);
  }

  function renderProducts() {
    return mockProducts
      .slice()
      .sort((a, b) => (orderBy === 'asc' ? a.price - b.price : b.price - a.price))
      .map((product) => {
        let isProductInCart = selectedItems.some((item) => item.id === product.id);

        let handleSelect = isProductInCart
          ? () => removeProduct(product.id)
          : () => addProduct(product.id, product.price);

        return (
          <li key={product.id} className='Products__list-item'>
            <ProductCard
              product={product}
              isSelected={isProductInCart}
              onProductSelect={handleSelect}
            />
          </li>
        );
      });
  }

  return (
    <div className='Page-wrapper Catalog'>
      <div className='Toolbar'>
        <div className='Filter'>
          <select className='Filter__select' value={orderBy} onChange={handleFilterSelect}>
            <option className='Filter__option' value={OrderKeyword.ASC}>
              Порядок: сперва дешевле
            </option>
            <option className='Filter__option' value={OrderKeyword.DESC}>
              Порядок: сперва дороже
            </option>
          </select>
        </div>
      </div>
      <section className='Products'>
        <ul className='Products__list'>{renderProducts()}</ul>
      </section>
    </div>
  );
};
