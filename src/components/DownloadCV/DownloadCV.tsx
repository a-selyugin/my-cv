import { FC } from 'react';

import './DownloadCV.pcss';

import MyCV from '@/assets/cv/artem-selyugin-cv.pdf';

export const DownloadCV: FC = (): JSX.Element => (

  <div
    className='download-cv'>
    <div>
      <div className="fake-button">
        <a href={MyCV}>DOWNLOAD CV</a>
      </div>
    </div>
  </div>
);
