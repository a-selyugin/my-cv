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
    </p><p
      className='jobs__subheading'
    >
      May 2019 - present
    </p>
    <p
      className='jobs__text'
    >
      Responsibilities:
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
          Sales support, meeting participations witch clients on pre-sale stage.
        </li>
        <li>
          Technical meetings participation on behalf of company.
        </li>
      </ul>
    </p>
  </div>
);
