import { FC } from 'react';

import './Navbar.pcss';

export const Navbar: FC = (): JSX.Element => (

  <ul
    className='header__links'>
    <li
      className='drop-down'>
          Experience
    </li>
    <li>
      <a href="#education">
        Education
      </a>
    </li>
    <li>
      <a href="#skills">
        Skills
      </a>
    </li>
    <li>
      <a href="#contact">
        Contact
      </a>
    </li>
  </ul>
);
