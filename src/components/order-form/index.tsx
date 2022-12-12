import { Button } from 'components/button';
import { FC } from 'react';

type OrderFormProps = {
  orderPrice: number;
};

export const OrderForm: FC<OrderFormProps> = ({ orderPrice }) => {
  return (
    <form className='Order-form'>
      <legend className='Order-form__title'>Оформление заказа</legend>
      <fieldset className='Order-form__fields'>
        {/* <label htmlFor='name'>Имя Фамилия</label> */}
        <input id='name' type='text' placeholder='Имя Фамилия' />
        <input id='phone' type='tel' placeholder='+ 7 900 000 00 00' />
        <input id='address' type='text' placeholder='Адрес доставки' />
      </fieldset>
      <div className='Order-form__price'>
        Итого: <span className='Order-form__price-value'>{orderPrice.toLocaleString()}</span> руб.
      </div>
      <Button type='submit' size='lg' variance='outlined'>
        Оформить заказ
      </Button>
    </form>
  );
};
