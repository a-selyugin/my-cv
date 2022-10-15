import './ProjectCard.pcss';

interface ProjectCardProps {
  imgSource: string;
  projectName: string;
  deployLink: string;
}

export const ProjectCard = ({
  imgSource,
  projectName,
  deployLink,
}: ProjectCardProps): JSX.Element => (
  <div
    className='project-card'>
    <img
      className='project-card__image'
      src={imgSource}
      alt={projectName}
    />
    <a
      className='project-card__link'
      href={deployLink}
      target='_blank'
      rel='noreferrer'>
      {projectName}
    </a>
  </div>
);
