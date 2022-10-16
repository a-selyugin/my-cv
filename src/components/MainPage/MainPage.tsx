import { FC, ReactNode, useState } from 'react';

import './MainPage.pcss';

import { AboutMe } from '../AboutMe';
import { Education } from '../Education';
import { Footer } from '../Footer';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { MyRecentProjects } from '../MyRecentProjects';
import { Skills } from '../Skills';

export const MainPage: FC = (): JSX.Element => {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalContent, setModelContent] = useState<ReactNode>(null);

  const putContentIntoModal = (content: ReactNode) => {
    setModelContent(content);
    if (content) {
      setModalActive(true);
    }
  };

  return (
    <main>
      <AboutMe />
      <MyRecentProjects
        returnModalContent={putContentIntoModal}
      />
      <Education />
      <Skills />
      <Footer />
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
      >
        {modalContent}
      </ModalWindow>
    </main>
  );
};
