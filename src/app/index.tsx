import React, { FC } from 'react';
import { Navbar } from 'components';
import { Catalog } from 'pages';
import 'styles/main.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
      </header>
      <main className='App-main'>
        <Catalog />
      </main>
    </div>
  );
};

export default App;
