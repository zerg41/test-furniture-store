import React, { FC, useState } from 'react';
import { mockProducts } from 'mock';
import { ProductCard } from 'components';
import { ICartItem } from 'app';

// interface IOrderKeyword {
//   ASC: 'asc',
//   DESC: 'desc'
// }

type OrderByOption = typeof OrderKeyword[keyof typeof OrderKeyword];

const OrderKeyword = {
  NONE: 'none',
  ASC: 'asc',
  DESC: 'desc',
} as const;

type CatalogProps = {
  cartItems: ICartItem[];
  onProductSelect: (id: number) => void;
};

export const Catalog: FC<CatalogProps> = ({ cartItems, onProductSelect }) => {
  let [orderBy, setOrderBy] = useState<OrderByOption>(OrderKeyword.ASC);

  function handleFilterSelect(evt: React.ChangeEvent<HTMLSelectElement>) {
    setOrderBy(evt.target.value as OrderByOption);
  }

  function renderProducts() {
    return mockProducts
      .slice()
      .sort((a, b) => (orderBy === 'asc' ? a.price - b.price : b.price - a.price))
      .map((product) => {
        let isSelected = cartItems.some((item) => item.id === product.id);

        return (
          <li key={product.id} className='Products__list-item'>
            <ProductCard
              product={product}
              isSelected={isSelected}
              onProductSelect={onProductSelect}
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
