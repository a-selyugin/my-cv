import './ProjectCard.pcss';

import { ReactNode } from 'react';

import InfoSVG from '@/assets/icons/about.svg';
import GitHubSVG from '@/assets/icons/github.svg';
import DeploySVG from '@/assets/icons/web.svg';

export interface ProjectCardContent {
  imgSource: string;
  projectName: string;
  deployLink: string;
  githubLink: string;
  info?: ReactNode;
}

interface ProjectCardProps {
  proj: ProjectCardContent;
  moreInfoClick: (proj: ProjectCardContent) => void;
}

export const ProjectCard = ({
  proj,
  moreInfoClick,
}: ProjectCardProps): JSX.Element => (
  <div
    className='project-card'>
    <div className='project-card__image'>
      <img
        src={proj.imgSource}
        alt={proj.projectName}
      />
      <div className='project-card__overlay'>
        <div className='links-container'>
          <a
            className='links-container__icon'
            title="Go to project deploy"
            href={proj.deployLink}>
            <DeploySVG
              fill='white'
            />
          </a>
          <a
            className='links-container__icon'
            title="Check project's source code"
            href={proj.githubLink}>
            <GitHubSVG
              fill='white'
            />
          </a>
          <button
            className='links-container__icon'
            title="See the information about project"
            type='button'
            onClick={() => moreInfoClick(proj)}
          >
            <InfoSVG
              fill='white'
            />
          </button>
        </div>
      </div>
    </div>
    <a
      className='project-card__link'
      href={proj.deployLink}
      target='_blank'
      rel='noreferrer'>
      {proj.projectName}
    </a>
  </div>
);
