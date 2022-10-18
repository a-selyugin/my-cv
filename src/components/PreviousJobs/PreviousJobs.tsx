import { FC } from 'react';

import './PreviousJobs.pcss';

export const PreviousJobs: FC = (): JSX.Element => (
  <section
    className='wrapper'
  >
    <h3
      className='modal-content__heading'
    >
      Previous positions
    </h3>
    <p
      className='main-text'
    >
      Product Manager - Navis Engineering Oy
    </p>
    <p
      className='modal-content__text'
    >
      The goal was to make a website according to Figma draft as close as possible. The
       website consist of two pages and includes simple things like sliders and burger menu.
        The trick was to make slider on main page working as infinite shuffle.
    </p>
  </section>
);
