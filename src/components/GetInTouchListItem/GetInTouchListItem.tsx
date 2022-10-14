import { ReactNode } from 'react';

import './GetInTouchListItem.pcss';

interface GetInTouchListItemProps {
  targetLink: string;
  listText: string;
  children?: ReactNode;
}

export const GetInTouchListItem = ({
  targetLink,
  listText,
  children,
}: GetInTouchListItemProps): JSX.Element => (
  <li>
    <a
      className='get-in-touch__item'
      target='_blank'
      rel='noreferrer'
      href={targetLink}>
      {children}
      <span>{listText}</span>
    </a>
  </li>
);
