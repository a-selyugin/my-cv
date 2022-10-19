import { FC } from 'react';

import { DownloadCV } from '@/components/DownloadCV';
import { PreviousJobs } from '@/components/PreviousJobs';

import './PreviousPositionsPage.pcss';

export const PreviousPositionsPage: FC = (): JSX.Element => (
  <main>
    <PreviousJobs />
    <DownloadCV />
  </main>
);
