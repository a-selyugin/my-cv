import { FC } from 'react';

import './VirtualKeyboardInfo.pcss';

export const VirtualKeyboardInfo: FC = (): JSX.Element => (
  <div>
    <h3
      className='modal-content__heading'
    >
      VIRTUAL KEYBOARD
    </h3>
    <p
      className='modal-content__text'
    >
      The goal was to make in-browser keyboard which works both from real keyboard
       and via mouse. The design was at my discretion.
    </p>
    <p
      className='modal-content__text'
    >
      <span className='text-red-600'>STACK:</span> HTML/CSS/JS, SASS, Webpack, Eslint, OOP.
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
