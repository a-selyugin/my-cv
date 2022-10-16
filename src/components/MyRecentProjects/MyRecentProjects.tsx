import { FC, useState } from 'react';

import { ModalWindow } from '../ModalWindow/ModalWindow';
import { ProjectCard } from '../ProjectCard/ProjectCard';

import OnlineStore from '@/assets/images/online-store.png';
import RsLang from '@/assets/images/rslang.png';
import Shelter from '@/assets/images/shelter.png';
import VirtualKeyboard from '@/assets/images/virtual-keyboard.png';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => {

  const [modalActive, setModalActive] = useState<boolean>(true);

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
              imgSource={Shelter}
              projectName='Pet shelter page'
              deployLink='https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/shelter/pages/main/index.html'
              gitHubLink='/' />
            <ProjectCard
              imgSource={RsLang}
              projectName='Interactive English textbook'
              deployLink='http://rslang-team75.pages.dev/'
              gitHubLink='https://github.com/RS-Lang-Team75/rslang' />
            <ProjectCard
              imgSource={OnlineStore}
              projectName='Online store page'
              deployLink='https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/online-store/'
              gitHubLink='/' />
            <ProjectCard
              imgSource={VirtualKeyboard}
              projectName='Virtual keyboard'
              deployLink='https://a-selyugin.github.io/virtual-keyboard/'
              gitHubLink='https://github.com/a-selyugin/virtual-keyboard/tree/virtual-keyboard' />
          </div>
        </div>
      </section>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
      />
    </>
  );
};
