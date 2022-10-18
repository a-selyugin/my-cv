import { FC } from 'react';

import './ProductManager.pcss';

export const ProductManager: FC = (): JSX.Element => (

  <div
    className='jobs'
  >
    <p
      className='jobs__heading'
    >
    Product Manager - Navis Engineering Oy
    </p>
    <p
      className='jobs__subheading'
    >
      May 2019 - present
    </p>
    <div
      className='jobs__text'
    >
      <p className="jobs__underline">Responsibilities:</p>
      <ul className='jobs__list'>
        <li>
          Software development planning and management
        </li>
        <li>
          Creating of technical specifications
        </li>
        <li>
          Creating of new products and features concept
        </li>
        <li>
          Infrastructure websites maintaining
        </li>
        <li>
          Sales support, meeting participation witch clients on pre-sale stage
        </li>
        <li>
          Technical meetings participation on behalf of company
        </li>
      </ul>
    </div>
    <div
      className='jobs__text'
    >
      <p className="jobs__underline">Achievements:</p>
      <ul className='jobs__list'>
        <li>
          Delivered a new product (NJoy) including UI/UX development.
           The new product is based DP system which allows company to
           cover new markets using existing technologies. Using the same technologies also allows
           to reduce the cost of production drastically.
           More info about the NJoy system <a
            className='main-link'
            href='https://navisincontrol.com/news/njoy-our-newest-generation-of-joystick-maneuvering-control-system/'
            target='_blank'
            rel='noreferrer'>
          HERE
          </a>
        </li>
        <li>
          Optimized the SW regression testing which reduced testing time for about 15%
        </li>
        <li>
          Optimized feature lifecycle abandoning some customized and unused features
        </li>
      </ul>
    </div>
  </div>
);
