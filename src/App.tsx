import { useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage';
import { PreviousPositionsPage } from './pages/PreviousPositionsPage/PreviousPositionsPage';

import { Header } from '@/components/Header';

export const App = (): JSX.Element => {

  const [showMain, setShowMain] = useState<boolean>(true);

  const selectMain = (isMainPageSelected: boolean) => {
    setShowMain(isMainPageSelected);
  };

  return (

    <div
      className='body-container'
    >
      <Header
        selectMain={selectMain}
      />
      {showMain && <MainPage />}
      {!showMain && <PreviousPositionsPage />}
      <Footer />

    </div>
  );
};
