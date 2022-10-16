import { FC, ReactNode, useState } from 'react';

import { ModalWindow } from '../ModalWindow/ModalWindow';
import { ProjectCard, ProjectCardContent } from '../ProjectCard/ProjectCard';
import { OnlineStoreInfo } from '../ProjectInfo/OnlineStoreInfo/OnlineStoreInfo';
import { RsLangInfo } from '../ProjectInfo/RsLangInfo/RsLangInfo';
import { ShelterInfo } from '../ProjectInfo/ShelterInfo/ShelterInfo';
import { VirtualKeyboardInfo } from '../ProjectInfo/VirtualKeyboardInfo/VirtualKeyboardInfo';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalContent, setModelContent] = useState<ReactNode>(null);

  const moreInfo = (proj: ProjectCardContent) => {
    setModelContent(proj.info);
    if (proj.info) {
      setModalActive(true);
    }
  };

  const projects = {
    shelter: {
      imgSource: 'shelter-image',
      projectName: 'Pet shelter page',
      deployLink: 'https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/shelter/pages/main/index.html',
      githubLink: '/',
      info: <ShelterInfo />,
    },
    rslang: {
      imgSource: 'rslang-image',
      projectName: 'Interactive English textbook',
      deployLink: 'http://rslang-team75.pages.dev/',
      githubLink: 'https://github.com/RS-Lang-Team75/rslang',
      info: <RsLangInfo />,
    },
    onlineStore: {
      imgSource: 'online-store-image',
      projectName: 'Online store page',
      deployLink: 'https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/online-store/',
      githubLink: '/',
      info: <OnlineStoreInfo />,
    },
    virtualKeyboard: {
      imgSource: 'virtual-keyboard-image',
      projectName: 'Virtual keyboard',
      deployLink: 'https://a-selyugin.github.io/virtual-keyboard/',
      githubLink: 'https://github.com/a-selyugin/virtual-keyboard/tree/virtual-keyboard',
      info: <VirtualKeyboardInfo />,
    },
  };

  const { shelter, rslang, onlineStore, virtualKeyboard } = projects;

  return (
    <>
      <section
        id='experience'
        className='my-recent-projects'>
        <div className='wrapper'>
          <h3 className="heading-3">
          MY RECENT PROJECTS
          </h3>
          <div
            className='projects-container'>
            <ProjectCard
              proj={shelter}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              proj={rslang}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              proj={onlineStore}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              proj={virtualKeyboard}
              moreInfoClick={moreInfo}
            />
          </div>
        </div>
      </section>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
      >
        {modalContent}
      </ModalWindow>
    </>
  );
};
