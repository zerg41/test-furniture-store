import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
// components
import { Cart, Catalog } from 'pages';
import { Navbar } from 'components';
// styles
import 'styles/main.scss';

const App: FC = () => {
  let [selectedPage, setSelectedPage] = useState<'catalog' | 'cart'>('catalog');
  let [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  let selectedProductsRef = useRef(selectedProducts);

  useEffect(() => {
    selectedProductsRef.current = selectedProducts;
  }, [selectedProducts]);

  let handleNavigation = useCallback((page: 'catalog' | 'cart') => {
    setSelectedPage(page);
  }, []);

  let handleProductSelect = useCallback((productId: number) => {
    if (selectedProductsRef.current.includes(productId)) {
      setSelectedProducts([
        ...selectedProductsRef.current.filter((selectedProduct) => selectedProduct !== productId),
      ]);

      return;
    }

    setSelectedProducts([...selectedProductsRef.current, productId]);
  }, []);

  function renderPage() {
    switch (selectedPage) {
      case 'catalog':
        return (
          <Catalog selectedProducts={selectedProducts} onProductSelect={handleProductSelect} />
        );
      case 'cart':
        return <Cart selectedProducts={selectedProducts} onProductSelect={handleProductSelect} />;
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
