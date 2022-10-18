import { FC } from 'react';

import './ServiceEngineer.pcss';

export const ServiceEngineer: FC = (): JSX.Element => (

  <div
    className='jobs'
  >
    <p
      className='jobs__heading'
    >
      Field Service Engineer - Navis Engineering Oy
    </p><p
      className='jobs__subheading'
    >
      Jan 2014 - Jun 2017
    </p><p
      className='jobs__text'
    >
      <p className="jobs__underline">Responsibilities:</p>
      <ul className='jobs__list'>
        <li>
        Commissioning of Dynamic Positioning Control Systems and Autopilot
         Systems on board of vessels including minor SW fixes
        </li>
        <li>
        System presentation to owners and class, meeting participation on behalf of company
        </li>
        <li>
        Service cases solving, customer support
        </li>
        <li>
        Providing DP-Maintenance courses and service agents training with further support
        </li>
        <li>
        Manuals writing and editing
        </li>
      </ul>
    </p>
    <p
      className='jobs__text'
    >
      <p className="jobs__underline">Achievements:</p>
      <ul className='jobs__list'>
        <li>
        More than 40 successfully commissioned projects from early 2014 to mid 2017
        </li>
        <li>
          Successfully trained more than 20 ship crew
           members and 3 service agents from early-to-mid 2017
        </li>
      </ul>
    </p>
  </div>
);
