import { FC } from 'react';

import TelegramSVG from '@/assets/icons/telegram.svg';

import './GetInTouch.pcss';

export const GetInTouch: FC = (): JSX.Element => (
  <>
    <p>
      Get in touch
    </p>
    <hr />
    <ul
      className='link-list'>
      <li>
        <a
          className='get-in-touch-item'
          target='_blank'
          rel='noreferrer'
          href='https://t.me/showmeartem'>
          <TelegramSVG />
          @showmeartem
        </a>
      </li>
    </ul>
  </>
);
