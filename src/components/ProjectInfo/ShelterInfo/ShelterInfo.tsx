import { FC } from 'react';

import './ShelterInfo.pcss';

export const ShelterInfo: FC = (): JSX.Element => (
  <div>
    <h3
      className='heading-3'
    >
      PET SHELTER
    </h3>
    <p>
      The goal was to make a website according to Figma draft as close as possible. The
       website consist of two pages and includes simple things like sliders and burger menu.
        The trick was to make slider on main page working as infinite shuffle.
    </p>
    <p>
      You can check task description <a
        href='https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream1/shelter/README.md'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
      .
    </p>
    <p>You can check Figma draft <a
      href='https://www.figma.com/file/5iCIxvJJbLSk8JBiNlGaFv/shelter-dom-(Copy)'
      target='_blank'
      rel='noreferrer'>
        HERE
    </a>
    .
    </p>
  </div>
);
