import { FC } from 'react';

import './PreviousJobs.pcss';
import { ProductManager } from './ProductManager/ProductManager';
import { ProjectManager } from './ProjectManager/ProjectManager';
import { ServiceEngineer } from './ServiceEngineer/ServiceEngineer';
import { Technician } from './Technician/Technician';

export const PreviousJobs: FC = (): JSX.Element => (
  <section
    className='wrapper'
  >
    <h3
      className='heading-3'
    >
      Previous positions
    </h3>
    <ProductManager />
    <ProjectManager />
    <ServiceEngineer />
    <Technician />

  </section>
);
