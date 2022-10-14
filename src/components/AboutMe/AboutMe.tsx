import { FC } from 'react';

import { GetInTouch } from '../GetInTouch/GetInTouch';

import Artem from '@/assets/images/Artem.jpg';

import './AboutMe.pcss';

export const AboutMe: FC = (): JSX.Element => (
  <section
    className='about-me'>
    <div>
      <img
        className='my-photo'
        src={Artem}
        alt='Me' />
      <GetInTouch />
    </div>
    <div>
      <p>Hello, I am Artem, and I’m looking for a job as a front-end developer. </p>
      <p>Working as a product manager for the last 3 years I discovered my passion to User Interfaces and User Expierience. My urge learn different approaches to UI led me to front-end development.</p>
      <p>I also have a wide expierience in project management and customer care.</p>
      <p>Here you can know more about my previous jobs.</p>
    </div>
  </section>
);
