import { FC } from 'react';

import './Navbar.pcss';

export const Navbar: FC = (): JSX.Element => (

  <ul
    className='header__links'>
    <li
      className='drop-down'>
          Experience
    </li>
    <li>Education</li>
    <li>Skills</li>
    <li>Contact</li>
  </ul>
);
