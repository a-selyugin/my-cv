import './ProjectCard.pcss';

import InfoSVG from '@/assets/icons/about.svg';
import GitHubSVG from '@/assets/icons/github.svg';
import DeploySVG from '@/assets/icons/web.svg';

interface ProjectCardProps {
  imgSource: string;
  projectName: string;
  deployLink: string;
  githubLink: string;
  moreInfoClick: (projectName: string) => void;
}

export const ProjectCard = ({
  imgSource,
  projectName,
  deployLink,
  githubLink,
  moreInfoClick,
}: ProjectCardProps): JSX.Element => (
  <div
    className='project-card'>
    <div className='project-card__image'>
      <img
        src={imgSource}
        alt={projectName}
      />
      <div className='project-card__overlay'>
        <div className='links-container'>
          <a
            className='links-container__icon'
            title="Go to project deploy"
            href={deployLink}>
            <DeploySVG
              fill='white'
            />
          </a>
          <a
            className='links-container__icon'
            title="Check project's source code"
            href={githubLink}>
            <GitHubSVG
              fill='white'
            />
          </a>
          <button
            className='links-container__icon'
            title="See the information about project"
            type='button'
            onClick={() => moreInfoClick(projectName)}
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
      href={deployLink}
      target='_blank'
      rel='noreferrer'>
      {projectName}
    </a>
  </div>
);
