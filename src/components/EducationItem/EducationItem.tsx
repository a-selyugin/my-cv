import './EducationItem.pcss';

interface EducationItemProps {
  heading: string;
  info: string;
}

export const EducationItem = ({
  heading,
  info,
}: EducationItemProps): JSX.Element => (
  <div
    className='education-item'>
    <h4
      className='education-item__heading'
    >
      {heading}
    </h4>
    <p
      className='education-item__info'
    >
      {info}
    </p>
  </div>
);
