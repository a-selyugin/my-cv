import { FC } from 'react';

import { ProjectCard } from '../ProjectCard/ProjectCard';

import Shelter from '@/assets/images/shelter.png';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => (
  <section
    className='my-recent-projects'>
    <div className='wrapper'>
      <h3 className="heading-3">
        MY RECENT PROJECTS
      </h3>
      <ProjectCard
        imgSource={Shelter}
        projectName='Pet shelter page'
        deployLink='https://rolling-scopes-school.github.io/a-selyugin-JSFE2022Q1/shelter/pages/main/index.html'
      />
    </div>
  </section>
);
