import { Link } from 'react-router-dom';

import { FC } from 'react';

import { Navbar } from '../Navbar/Navbar';

import './Header.pcss';

export const Header: FC = (): JSX.Element => (
  <header className='header'>
    <section className='header-wrapper'>

      <Link
        key='logo-link'
        className="header__logo"
        to='/'
      >
        Artem Selyugin
      </Link>

      <Navbar />

    </section>
  </header>
);
