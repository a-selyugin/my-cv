import { FC, useState } from 'react';

import './Navbar.pcss';

interface NavbarProps {
  goToMain: () => void;
  escapeMain: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  goToMain,
  escapeMain,
}): JSX.Element => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuClick = (isGoToMain: boolean) => {
    setIsMenuOpen(!isMenuOpen);
    if (isGoToMain) {
      goToMain();
    } else {
      escapeMain();
    }
  };

  return (

    <nav
      className='nav-container'
    >
      <ul
        className={!isMenuOpen ? 'header__links_desktop header__links_hidden' : 'header__links_desktop'}>
        <li
          className='header__submenu header__link-wrapper'
        >
          <div
            className='header__link-wrapper'
          >
          Experience
            <span className='rotating-marker'>▲</span>
          </div>
          <div className="header__submenu_content header__link-wrapper">
            <ul>
              <li
                className='header__link-wrapper'
              >
                <a
                  className='link-underline'
                  onClick={() => menuClick(false)}
                  href="#jobs"
                >
              Jobs
                </a>
              </li>
              <li
                className='header__link-wrapper'
              >
                <a
                  className='link-underline'
                  onClick={() => menuClick(true)}
                  href="#experience">
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
            onClick={() => menuClick(true)}
            href="#education">
          Education
          </a>
        </li>
        <li
          className='header__link-wrapper'
        >
          <a
            className='link-underline'
            onClick={() => menuClick(true)}
            href="#skills">
          Skills
          </a>
        </li>
        <li
          className='header__link-wrapper'
        >
          <a
            className='link-underline'
            onClick={() => menuClick(true)}
            href="#contact">
          Contact
          </a>
        </li>
      </ul>

      <button
        type='button'
        className={isMenuOpen ? 'burger-menu-icon burger-menu-icon_pressed': 'burger-menu-icon'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};
