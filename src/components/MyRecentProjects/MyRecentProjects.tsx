import { FC, useState } from 'react';

import { ModalWindow } from '../ModalWindow/ModalWindow';
import { ProjectCard } from '../ProjectCard/ProjectCard';

import OnlineStore from '@/assets/images/online-store.png';
import RsLang from '@/assets/images/rslang.png';
import Shelter from '@/assets/images/shelter.png';
import VirtualKeyboard from '@/assets/images/virtual-keyboard.png';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => {

  const [modalActive, setModalActive] = useState<boolean>(false);

  const moreInfo = (projName: string) => {
    console.log(projName);
  };

  const projects = {
    shelter: {
      imgSource: Shelter,
      projectName: 'Pet shelter page',
      deployLink: 'https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/shelter/pages/main/index.html',
      githubLink: '/',
    },
    rslang: {
      imgSource: RsLang,
      projectName: 'Interactive English textbook',
      deployLink: 'http://rslang-team75.pages.dev/',
      githubLink: 'https://github.com/RS-Lang-Team75/rslang',
    },
    onlineStore: {
      imgSource: OnlineStore,
      projectName: 'Online store page',
      deployLink: 'https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/online-store/',
      githubLink: '/',
    },
    virtualKeyboard: {
      imgSource: VirtualKeyboard,
      projectName: 'Virtual keyboard',
      deployLink: 'https://a-selyugin.github.io/virtual-keyboard/',
      githubLink: 'https://github.com/a-selyugin/virtual-keyboard/tree/virtual-keyboard',
    },
  };

  const { shelter, rslang, onlineStore, virtualKeyboard } = projects;

  return (
    <>
      <section
        className='my-recent-projects'>
        <div className='wrapper'>
          <h3 className="heading-3">
          MY RECENT PROJECTS
          </h3>
          <div
            className='projects-container'>
            <ProjectCard
              imgSource={shelter.imgSource}
              projectName={shelter.projectName}
              deployLink={shelter.deployLink}
              githubLink={shelter.githubLink}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              imgSource={rslang.imgSource}
              projectName={rslang.projectName}
              deployLink={rslang.deployLink}
              githubLink={rslang.githubLink}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              imgSource={onlineStore.imgSource}
              projectName={onlineStore.projectName}
              deployLink={onlineStore.deployLink}
              githubLink={onlineStore.githubLink}
              moreInfoClick={moreInfo}
            />
            <ProjectCard
              imgSource={virtualKeyboard.imgSource}
              projectName={virtualKeyboard.projectName}
              deployLink={virtualKeyboard.deployLink}
              githubLink={virtualKeyboard.githubLink}
              moreInfoClick={moreInfo}
            />
          </div>
        </div>
      </section>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
      >
      THIS IS CONTENT
      </ModalWindow>
    </>
  );
};
