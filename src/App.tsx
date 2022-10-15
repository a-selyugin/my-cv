import { AboutMe } from './components/AboutMe';
import { MyRecentProjects } from './components/MyRecentProjects/MyRecentProjects';

import { Header } from '@/components/Header';

export const App = (): JSX.Element => (
  <>
    <Header />
    <AboutMe />
    <MyRecentProjects />
  </>
);
