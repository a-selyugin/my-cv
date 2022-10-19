import { FC } from 'react';

import './DownloadCV.pcss';

export const DownloadCV: FC = (): JSX.Element => (

  <div
    className='download-cv'>
    <div className="button-container">
      <a
        className='fake-button'
        href='https://github.com/a-selyugin/my-cv/raw/no-router-develop/src/assets/cv/artem-selyugin-cv.pdf'>
          DOWNLOAD CV
      </a>
    </div>
  </div>
);
