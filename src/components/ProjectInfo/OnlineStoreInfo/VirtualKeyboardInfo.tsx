import { FC } from 'react';

import './VirtualKeyboardInfo.pcss';

export const VirtualKeyboardInfo: FC = (): JSX.Element => (
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
      Full task description <a
        className='main-link'
        href='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md'
        target='_blank'
        rel='noreferrer'>
        HERE
      </a>
      .
    </p>
  </div>
);
