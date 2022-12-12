import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
// components
import { Cart, Catalog } from 'pages';
import { Navbar } from 'components';
// styles
import 'styles/main.scss';

export interface ICartItem {
  id: number;
  price: number;
  amount: number;
}

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

  let handleCartChange = useCallback(
    (productId?: number, productPrice?: number, productAmount?: number) => {
      // Clean Cart
      if (productId == null) {
        setCart([]);

        return;
      }

      // Remove Cart Item
      if (cartRef.current.some((item) => item.id === productId)) {
        setCart([...cartRef.current.filter((item) => item.id !== productId)]);

        return;
      }

      // Add Item
      if (productId != null && productPrice != null) {
        setCart([...cartRef.current, { id: productId, price: productPrice, amount: 1 }]);

        return;
      }

      if (productId != null && productAmount != null) {
        setCart((cart) =>
          cart.map((item) => {
            if (item.id === productId) {
              return { id: item.id, price: item.price, amount: productAmount };
            }

            return item;
          })
        );
      }
    },
    []
  );

  function renderPage() {
    switch (location) {
      case 'catalog':
        return <Catalog cartItems={cart} onProductSelect={handleCartChange} />;
      case 'cart':
        return <Cart cartItems={cart} onProductSelect={handleCartChange} />;
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
