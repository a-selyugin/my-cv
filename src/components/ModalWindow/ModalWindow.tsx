import { FC } from 'react';

import './ModalWindow.pcss';

export const ModalWindow: FC = (): JSX.Element => (
  <div
    className='modal-overlay'>
    <div className='modal-window'>
      <h3 className="heading-3">
        MY RECENT PROJECTS
      </h3>
    </div>
  </div>
);
