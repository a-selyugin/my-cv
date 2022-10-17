import { MainPage } from './pages/MainPage';
import { PreviousPositionsPage } from './pages/PreviousPositionsPage/PreviousPositionsPage';

import { Header } from '@/components/Header';
import { Footer } from './components/Footer/Footer';

export const App = (): JSX.Element => (
  <>
    <Header />
    <MainPage />
    <PreviousPositionsPage />
    <Footer />
  </>
);
