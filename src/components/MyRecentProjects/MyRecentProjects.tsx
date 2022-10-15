import { FC } from 'react';

import { ProjectCard } from '../ProjectCard/ProjectCard';

import './MyRecentProjects.pcss';

export const MyRecentProjects: FC = (): JSX.Element => (
  <section
    className='my-recent-projects'>
    <div className='wrapper'>
      <h3 className="heading-3">
        MY RECENT PROJECTS
      </h3>
      <ProjectCard />
    </div>
  </section>
);
