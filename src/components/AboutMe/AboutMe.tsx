import { FC } from 'react';

import { GetInTouch } from '../GetInTouch/GetInTouch';

import Artem from '@/assets/images/Artem.jpg';

import './AboutMe.pcss';

export const AboutMe: FC = (): JSX.Element => (
  <section
    className='about-me'>
    <div className='wrapper'>
      <div>
        <img
          className='my-photo'
          src={Artem}
          alt='Me' />
        <GetInTouch />
      </div>
      <div>
        <p>Hello, I am Artem, and I’m looking for a job as a front-end developer. </p>
        <p>Working as a product manager for the last 3 years I discovered my passion to User Interfaces and User Expierience. My urge to learn different UI approaches led me to the front-end development.</p>
        <p>I also have a wide experience in project management and customer care.</p>
        <p>Here you can know more about my previous jobs.</p>
      </div>
    </div>
  </section>
);
