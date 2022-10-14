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
      className='get-in-touch-item'
      target='_blank'
      rel='noreferrer'
      href={targetLink}>
      {children}
      {listText}
    </a>
  </li>
);
