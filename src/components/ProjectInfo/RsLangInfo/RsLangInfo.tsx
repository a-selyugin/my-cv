import { FC } from 'react';

import './RsLangInfo.pcss';

export const RsLangInfo: FC = (): JSX.Element => (
  <div>
    <h3
      className='modal-content__heading'
    >
      RS Lang
    </h3>
    <p
      className='modal-content__text'
    >
      This was the graduation work in RS School. The goal
       was to make an interactive English textbook with built-in games.
       Some kind of simplified lingualeo.com copy.
    </p>
    <p
      className='modal-content__text'
    >
      The project was to be made by the team of 3 people. But unfortunately
       due to personal reasons our 3rd team member was unable to join the work
        so the project was done by 2 people in 3 weeks.
    </p>
    <p
      className='modal-content__text'
    >
      Back-end was provided by the school.
    </p>
    <p
      className='modal-content__text'
    >
      <span className="text-red-600">Completed:</span> September 2022
    </p>
    <p
      className='modal-content__text'
    >
      <span className='text-red-600'>Stack:</span> React, TypeScript, RESTful API, Tailwind.
    </p>
    <p
      className='modal-content__text'
    >
      Full task description <a
        className='main-link'
        href='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
      .
    </p>
  </div>
);
