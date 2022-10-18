import { FC, ReactNode, useState } from 'react';

import './MainPage.pcss';

import { AboutMe } from '../../components/AboutMe/index';
import { Education } from '../../components/Education/index';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { MyRecentProjects } from '../../components/MyRecentProjects/index';
import { Skills } from '../../components/Skills/index';

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
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
      >
        {modalContent}
      </ModalWindow>
    </main>
  );
};
