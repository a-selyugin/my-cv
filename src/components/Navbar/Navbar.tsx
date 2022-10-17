import { FC } from 'react';

import './Navbar.pcss';

interface NavbarProps {
  goToMain: () => void;
  escapeMain: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  goToMain,
  escapeMain,
}): JSX.Element => (

  <nav>
    <ul
      className='header__links_desktop'>
      <li
        className='header__submenu header__link-wrapper'
      >
        <div
          className='header__link-wrapper'
        >
          Experience
        </div>
        <div className="header__submenu_content header__link-wrapper">
          <ul>
            <li
              className='header__link-wrapper'
            >
              <a
                className='link-underline'
                onClick={escapeMain}
                href="/#"
              >
              Previous jobs
              </a>
            </li>
            <li
              className='header__link-wrapper'
            >
              <a
                className='link-underline'
                onClick={goToMain}
                href="/#experience">
                  Recent projects
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li
        className='header__link-wrapper'
      >
        <a
          className='link-underline'
          onClick={goToMain}
          href="/#education">
          Education
        </a>
      </li>
      <li
        className='header__link-wrapper'
      >
        <a
          className='link-underline'
          onClick={goToMain}
          href="/#skills">
          Skills
        </a>
      </li>
      <li
        className='header__link-wrapper'
      >
        <a
          className='link-underline'
          onClick={goToMain}
          href="/#contact">
          Contact
        </a>
      </li>
    </ul>

    <div
      className='header__links_mobile'
    >
      Burger
    </div>
  </nav>
);
