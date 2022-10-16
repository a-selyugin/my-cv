import { FC } from 'react';

import './OnlineStoreInfo.pcss';

export const OnlineStoreInfo: FC = (): JSX.Element => (
  <div>
    <h3
      className='modal-content__heading'
    >
      online store page
    </h3>
    <p
      className='modal-content__text'
    >
      The goal was to make online store page with items filtering and sorting.
       The design was at my discretion.
    </p>
    <p
      className='modal-content__text'
    >
      Basic module testing wa also implemented.
    </p>
    <p
      className='modal-content__text'
    >
      <span className='text-red-600'>STACK:</span> TypeScript, SASS, JEST, Webpack, Eslint.
    </p>
    <p
      className='modal-content__text'
    >
      Full task description <a
        className='main-link'
        href='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
      .
    </p>
  </div>
);
