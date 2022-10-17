import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage';
import { PreviousPositionsPage } from './pages/PreviousPositionsPage/PreviousPositionsPage';

import { Header } from '@/components/Header';

export const App = (): JSX.Element => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/previous-jobs' element={<PreviousPositionsPage />} />
    </Routes>
    <Footer />
  </>
);
