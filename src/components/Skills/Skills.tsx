import { FC } from 'react';

import './Skills.pcss';

export const Skills: FC = (): JSX.Element => (
  <section
    id='skills'
    className='skills'>
    <div className='wrapper-flex'>
      <div className="skills__container">
        <h3 className="heading-3">
          SKILLS / TECHNOLOGY STACK
        </h3>
        <ul
          className='skills__list'
        >
          <li>HTML / CSS / SCSS / SASS</li>
          <li>JavaScript / TypeScript</li>
          <li>Webpack</li>
          <li>Git / GitHub</li>
          <li>Subversion</li>
          <li>Jira</li>
          <li>React (basics)</li>
          <li>JEST (basics)</li>
          <li>Project Management</li>
          <li>Agile / SCRUM (basics)</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className="education__container">
        <h3 className="heading-3">
          LANGUAGES
        </h3>
        <ul
          className='skills__list'
        >
          <li>Russian - native</li>
          <li>English - upper intermidiate+</li>
        </ul>
      </div>
    </div>
  </section>
);
