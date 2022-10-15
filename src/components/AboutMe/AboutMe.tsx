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
        <p className='main-text'>Hello, I am <span className="text-red-600">Artem</span>, and I’m looking for a job as a <span className="text-red-600">front-end developer</span>. </p>
        <p className='main-text'>Working as a product manager for the last 3 years I discovered my passion to User Interfaces and User Expierience. My urge to learn different UI approaches led me to the front-end development.</p>
        <p className='main-text'>I also have a wide experience in project management and customer care.</p>
        <p className='main-text'><span className="text-red-600">Here</span> you can know more about my previous jobs.</p>
      </div>
    </div>
  </section>
);
