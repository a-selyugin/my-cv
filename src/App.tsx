import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { MyRecentProjects } from './components/MyRecentProjects';

import { Header } from '@/components/Header';

export const App = (): JSX.Element => (
  <>
    <Header />
    <AboutMe />
    <MyRecentProjects />
    <Education />
  </>
);
