import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
// components
import { Cart, Catalog } from 'pages';
import { Navbar } from 'components';
// styles
import 'styles/main.scss';
// utils
import { ICartItem } from 'types';

const App: FC = () => {
  let [location, setLocation] = useState<'catalog' | 'cart'>('catalog'); // TODO: replace with routes
  let [cart, setCart] = useState<ICartItem[]>([]);
  let cartRef = useRef(cart);

  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);

  let handleNavigation = useCallback((page: 'catalog' | 'cart') => {
    setLocation(page);
  }, []);

  let addItem = useCallback((id: number, price: number) => {
    setCart([...cartRef.current, { id: id, price: price, amount: 1 }]);
  }, []);

  let removeItem = useCallback((id: number) => {
    setCart(cartRef.current.filter((item) => item.id !== id));
  }, []);

  let changeAmount = useCallback((id: number, amount: number) => {
    setCart(
      cartRef.current.map((item) => {
        if (item.id === id) {
          return { ...item, amount: amount };
        }
        return item;
      })
    );
  }, []);

  let clearCart = useCallback(() => {
    setCart([]);
  }, []);

  function renderPage() {
    switch (location) {
      case 'catalog':
        return <Catalog selectedItems={cart} addProduct={addItem} removeProduct={removeItem} />;
      case 'cart':
        return (
          <Cart
            selectedItems={cart}
            onAmountChange={changeAmount}
            onProductRemove={removeItem}
            onCleanCart={clearCart}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar onLinkClick={handleNavigation} />
      </header>
      <main className='App-main'>{renderPage()}</main>
    </div>
  );
};

export default App;
