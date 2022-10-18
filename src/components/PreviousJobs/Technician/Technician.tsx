import { FC } from 'react';

import './Technician.pcss';

export const Technician: FC = (): JSX.Element => (

  <div
    className='jobs'
  >
    <p
      className='jobs__heading'
    >
    Technician - Navis Engineering Oy
    </p>
    <p
      className='jobs__subheading'
    >
      Apr 2013 - Jan 2014
    </p>
    <div
      className='jobs__text'
    >
      <p
        className="jobs__underline">
        Responsibilities:
      </p>
      <ul className='jobs__list'>
        <li>
        Equipment testing
        </li>
        <li>
        Factory Acceptance Tests conducting under the guidance of Quality Assurance Engineer
        </li>
      </ul>
    </div>
  </div>
);
