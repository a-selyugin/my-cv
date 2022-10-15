import { FC } from 'react';

import { GetInTouchListItem } from '../GetInTouchListItem/GetInTouchListItem';

import DiscordSVG from '@/assets/icons/discord.svg';
import GitHubSVG from '@/assets/icons/github.svg';
import LinkedinSVG from '@/assets/icons/linkedin.svg';
import MailSVG from '@/assets/icons/mail.svg';
import PhoneSVG from '@/assets/icons/phone.svg';
import TelegramSVG from '@/assets/icons/telegram.svg';

import './GetInTouch.pcss';

export const GetInTouch: FC = (): JSX.Element => (
  <div className='get-in-touch'>
    <h4
      className='get-in-touch__heading'>
      Get in touch
    </h4>

    <hr className='get-in-touch__divide' />

    <ul
      className='link-list'>

      <GetInTouchListItem
        targetLink='tel: +90 506 698 13 79'
        listText='+90 506 698 13 79'>
        <PhoneSVG
          fill='black'
        />
      </GetInTouchListItem>

      <GetInTouchListItem
        targetLink='https://t.me/showmeartem'
        listText='@showmeartem'>
        <TelegramSVG
          fill='black'
        />
      </GetInTouchListItem>

      <GetInTouchListItem
        targetLink='https://discordapp.com/users/695337819555758092'
        listText='@showmeartem'>
        <DiscordSVG
          fill='black'
        />
      </GetInTouchListItem>

      <GetInTouchListItem
        targetLink='https://github.com/a-selyugin'
        listText='a-selyugin'>
        <GitHubSVG
          fill='black'
        />
      </GetInTouchListItem>

      <GetInTouchListItem
        targetLink='mailto: selyuginai@gmail.com'
        listText='selyuginai@gmail.com'>
        <MailSVG
          fill='black'
        />
      </GetInTouchListItem>

      <GetInTouchListItem
        targetLink='https://www.linkedin.com/in/artem-selyuigin-61a824142/'
        listText='Artem Selyugin'>
        <LinkedinSVG
          fill='black'
        />
      </GetInTouchListItem>

    </ul>
  </div>
);
