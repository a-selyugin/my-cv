import { FC } from 'react';

import { EducationItem } from '@/components/EducationItem/';

import './Education.pcss';

export const Education: FC = (): JSX.Element => (
  <section
    id='education'
    className='education'>
    <div className='wrapper-flex'>
      <div className="education__container">
        <h3 className="heading-3">
          EDUCATION
        </h3>
        <EducationItem
          heading='ITMO University'
          info='MA in Automation and Control, 2012 - 2014'
        />
        <EducationItem
          heading='ITMO University'
          info='BA in Automation and Control, 2008 - 2012'
        />
      </div>
      <div className="education__container">
        <h3 className="heading-3">
          COURSES
        </h3>
        <EducationItem
          heading='Rolling Scopes School'
          info='JS / FRONT-END'
        />
      </div>
    </div>
  </section>
);
