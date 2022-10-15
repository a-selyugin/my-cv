import { FC } from 'react';

import DiscordSVG from '@/assets/icons/discord.svg';
import GitHubSVG from '@/assets/icons/github.svg';
import LinkedinSVG from '@/assets/icons/linkedin.svg';
import MailSVG from '@/assets/icons/mail.svg';
import TelegramSVG from '@/assets/icons/telegram.svg';

import './Footer.pcss';

export const Footer: FC = (): JSX.Element => (
  <footer
    id='contact'
    className='footer'>
    <section className='wrapper footer__wrapper'>
      <div
        className='footer__text'>
        Contact me
      </div>
      <div
        className='flex justify-center items-center'>
        <a
          href="https://github.com/a-selyugin"
          target='_blank'
          rel='noreferrer'
          className='svg-fill'
        >
          <GitHubSVG
            fill='white'
          />
        </a>
        <a
          href="https://www.linkedin.com/in/artem-selyuigin-61a824142/"
          target='_blank'
          rel='noreferrer'
          className='svg-fill'
        >
          <LinkedinSVG
            fill='white'
          />
        </a>
        <a
          href="https://t.me/showmeartem"
          target='_blank'
          rel='noreferrer'
          className='svg-fill'
        >
          <TelegramSVG
            fill='white'
          />
        </a>
        <a
          href="https://discordapp.com/users/695337819555758092"
          target='_blank'
          rel='noreferrer'
          className='svg-fill'
        >
          <DiscordSVG
            fill='white'
          />
        </a>
        <a
          href="mailto: selyuginai@gmail.com"
          target='_blank'
          rel='noreferrer'
          className='svg-fill'
        >
          <MailSVG
            fill='white'
          />
        </a>
      </div>
    </section>
  </footer>
);
