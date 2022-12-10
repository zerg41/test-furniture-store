import { Navbar } from 'components';
import React, { FC } from 'react';
import 'styles/main.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
      </header>
    </div>
  );
};

export default App;
