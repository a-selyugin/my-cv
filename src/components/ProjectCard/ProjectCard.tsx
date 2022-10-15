import './ProjectCard.pcss';

import InfoSVG from '@/assets/icons/about.svg';
import GitHubSVG from '@/assets/icons/github-white.svg';
import DeploySVG from '@/assets/icons/web.svg';

interface ProjectCardProps {
  imgSource: string;
  projectName: string;
  deployLink: string;
  gitHubLink: string;
}

export const ProjectCard = ({
  imgSource,
  projectName,
  deployLink,
  gitHubLink,
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
          <a href={deployLink}>
            <DeploySVG />
          </a>
          <a href={gitHubLink}>
            <GitHubSVG />
          </a>
          <button type='button'>
            <InfoSVG />
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
