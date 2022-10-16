import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { MyRecentProjects } from './components/MyRecentProjects';
import { Skills } from './components/Skills';

import { Header } from '@/components/Header';

export const App = (): JSX.Element => (
  <>
    <Header />
    <main>
      <AboutMe />
      <MyRecentProjects />
      <Education />
      <Skills />
      <Footer />
    </main>
  </>
);
