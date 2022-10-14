import { FC } from 'react';

import { Navbar } from '../Navbar/Navbar';

import './Header.pcss';

export const Header: FC = (): JSX.Element => (
  <header className='header'>
    <section className='header__wrapper'>

      <a href='/' className="header__logo">
        Artem Selyugin
      </a>

      <Navbar />

    </section>
  </header>
);
