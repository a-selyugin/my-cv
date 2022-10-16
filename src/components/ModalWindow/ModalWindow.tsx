/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { useScrollLock } from '@/hooks/useScrollLock/useScrollLock';
import './ModalWindow.pcss';

interface ModalWindowProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export const ModalWindow = ({
  active,
  setActive,
  children,
}: ModalWindowProps): JSX.Element => {

  const { lockScroll, unlockScroll } = useScrollLock();

  if (active) {
    lockScroll();
  }
  else {
    unlockScroll();
  }

  return (
    <div
      className={active ? 'modal-overlay modal-overlay_active' : 'modal-overlay'}
      role='button'
      onClick={() => setActive(false)}
      onKeyUp={key => {
        if (key.code === 'Escape') {
          setActive(false);
        }
      }}
    >
      <div
        className={active ? 'modal-window modal-window_active' : 'modal-window'}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <div
          className='modal-window__button-container'
        >
          <button
            className='modal-window__button'
            onClick={() => setActive(false)}
            type='button'
          >
        CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
