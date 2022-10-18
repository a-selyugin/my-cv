import { FC } from 'react';

import './ProjectManager.pcss';

export const ProjectManager: FC = (): JSX.Element => (

  <div
    className='jobs'
  >
    <p
      className='jobs__heading'
    >
    Project Manager - Navis Engineering Oy
    </p><p
      className='jobs__subheading'
    >
      Jul 2017 - May 2019
    </p>
    <p
      className='jobs__text'
    >
      <p className="jobs__underline">Responsibilities:</p>
      <ul className='jobs__list'>
        <li>
        Sales support
        </li>
        <li>
        Analysis of technical feasibility of projects
        </li>
        <li>
        Initiation, planning, execution, controlling and monitoring of projects
        </li>
        <li>
        Managing project resources and timeline
        </li>
        <li>
          Technical meetings participation on behalf of company
        </li>
        <li>
          Keeping in touch with clients, identifying and resolving issues
        </li>
      </ul>
    </p>
    <p
      className='jobs__text'
    >
      <p className="jobs__underline">Achievements:</p>
      <ul className='jobs__list'>
        <li>
        More then 30 successful projects
        </li>
        <li>
        Successful management of the development of
         new product: Integrated Thruster Control System closely coupled
          with Dynamic Positioning system and successful delivering of 2 such projects.
        </li>
      </ul>
    </p>
  </div>
);
