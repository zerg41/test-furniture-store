import React, { FC } from 'react';

type ButtonProps = {
  size?: 'md' | 'lg';
  variance?: 'solid' | 'outlined';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  size,
  variance,
  ...props
}) => {
  return (
    <button
      className={`Button ${size ? 'Button_size_' + size : ''} ${
        variance ? 'Button_variance_' + variance : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
