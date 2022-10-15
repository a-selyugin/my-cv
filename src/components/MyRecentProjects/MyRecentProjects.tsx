import { FC } from 'react';

import { ProjectCard } from '../ProjectCard/ProjectCard';

import OnlineStore from '@/assets/images/online-store.png';
import RsLang from '@/assets/images/rslang.png';
import Shelter from '@/assets/images/shelter.png';
import VirtualKeyboard from '@/assets/images/virtual-keyboard.png';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => (
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
        />
        <ProjectCard
          imgSource={RsLang}
          projectName='Interactive English textbook'
          deployLink='http://rslang-team75.pages.dev/'
        />
        <ProjectCard
          imgSource={OnlineStore}
          projectName='Online store page'
          deployLink='https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/online-store/'
        />
        <ProjectCard
          imgSource={VirtualKeyboard}
          projectName='Virtual keyboard'
          deployLink='https://a-selyugin.github.io/virtual-keyboard/'
        />
      </div>
    </div>
  </section>
);
