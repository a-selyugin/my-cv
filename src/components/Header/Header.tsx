import { FC } from 'react';

import { Navbar } from '../Navbar/Navbar';

import './Header.pcss';

interface HeaderProps {
  selectMain: (isMainSelected: boolean) => void;
}

export const Header: FC<HeaderProps> = ({
  selectMain,
}): JSX.Element => (
  <header className='header'>
    <section className='header-wrapper'>

      <button
        type='button'
        onClick={() => selectMain(true)}
        className="header__logo">
        Artem Selyugin
      </button>

      <Navbar
        goToMain={() => selectMain(true)}
        escapeMain={() => selectMain(false)}
      />

    </section>
  </header>

);
