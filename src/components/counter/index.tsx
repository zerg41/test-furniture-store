import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as CaretUpIcon } from 'assets/icons/caret-up-icon.svg';

type CounterProps = {
  min: number;
  max: number;
  onChange: () => void;
};

export const Counter: FC<CounterProps> = ({ min, max, onChange }) => {
  let [current, setCurrent] = useState(min);

  function handleIncrementButtonClick() {
    if (current < max) {
      setCurrent((current) => current + 1);
    }
  }

  function handleDecrementButtonClick() {
    if (current > 0 && current > min) {
      setCurrent((current) => current - 1);
    }
  }

  return (
    <div className='Counter'>
      <div className='Counter__display'>{current}</div>
      <div className='Counter__button-group'>
        <button onClick={handleIncrementButtonClick} disabled={current >= max}>
          <CaretUpIcon />
        </button>
        <button onClick={handleDecrementButtonClick} disabled={current <= 0 || current <= min}>
          <CaretUpIcon transform='rotate(180)' />
        </button>
      </div>
    </div>
  );
};
