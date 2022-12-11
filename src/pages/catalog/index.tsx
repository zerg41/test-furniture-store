import React, { FC, useState } from 'react';

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

export const Catalog: FC = () => {
  let [orderBy, setOrderBy] = useState<OrderByOption>(OrderKeyword.ASC);

  function handleFilterSelect(evt: React.ChangeEvent<HTMLSelectElement>) {
    setOrderBy(evt.target.value as OrderByOption);
  }

  return (
    <>
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
        <section className='Products'></section>
      </div>
    </>
  );
};
