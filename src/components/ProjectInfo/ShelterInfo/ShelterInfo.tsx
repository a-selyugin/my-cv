import { FC } from 'react';

import './ShelterInfo.pcss';

export const ShelterInfo: FC = (): JSX.Element => (
  <div>
    <h3
      className='modal-content__heading'
    >
      PET SHELTER
    </h3>
    <p
      className='modal-content__text'
    >
      The goal was to make a website according to Figma draft as close as possible. The
       website consist of two pages and includes simple things like sliders and burger menu.
        The trick was to make slider on main page working as infinite shuffle.
    </p>
    <p
      className='modal-content__text'
    >
      You can check full task description <a
        className='main-link'
        href='https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream1/shelter/README.md'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
      .
    </p>
    <p
      className='modal-content__text'
    >
      You can check Figma draft <a
        className='main-link'
        href='https://www.figma.com/file/5iCIxvJJbLSk8JBiNlGaFv/shelter-dom-(Copy)'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
    .
    </p>
  </div>
);
