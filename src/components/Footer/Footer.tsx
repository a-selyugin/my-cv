import { FC } from 'react';

import DiscordSVG from '@/assets/icons/discord.svg';
import GitHubSVG from '@/assets/icons/github.svg';
import LinkedinSVG from '@/assets/icons/linkedin.svg';
import MailSVG from '@/assets/icons/mail.svg';
import TelegramSVG from '@/assets/icons/telegram.svg';

import './Footer.pcss';

export const Footer: FC = (): JSX.Element => (
  <header className='footer'>
    <section className='wrapper flex justify-center items-center'>
      <a
        href="/"
        target='_blank'
        rel='noreferrer'
        className='svg-fill'
      >
        <GitHubSVG
          fill='red'
        />
      </a>
      <a
        href="/"
        target='_blank'
        rel='noreferrer'
        className='svg-fill'
      >
        <LinkedinSVG
          fill='red'
          stroke='white'/>
      </a>
      <a
        href="/"
        target='_blank'
        rel='noreferrer'
        className='svg-fill'
      >
        <TelegramSVG />
      </a>
      <a
        href="/"
        target='_blank'
        rel='noreferrer'
        className='svg-fill'
      >
        <DiscordSVG />
      </a>
      <a
        href="/"
        target='_blank'
        rel='noreferrer'
        className='svg-fill'
      >
        <MailSVG />
      </a>
    </section>
  </header>
);
