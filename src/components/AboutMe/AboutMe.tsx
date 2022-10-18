import { GetInTouch } from '../GetInTouch/GetInTouch';
import { PreviousJobs } from '../PreviousJobs/PreviousJobs';

import Artem from '@/assets/images/Artem.jpg';
import { ReturnModalContentProps } from '@/types/interfaces';

import './AboutMe.pcss';

export const AboutMe = ({
  returnModalContent,
}:ReturnModalContentProps): JSX.Element => {

  const prevJobsInfo = <PreviousJobs />;

  const showPreviousJobsModal = () => {
    returnModalContent(prevJobsInfo);
  };

  return (

    <section
      className='about-me'>
      <div className='wrapper-about-me'>
        <div
          className='about-me__container'
        >
          <img
            className='my-photo'
            src={Artem}
            alt='Me' />
          <GetInTouch />
        </div>
        <div>
          <p className='main-text'>Hello, I am <span className="text-red-600">Artem</span>, and I’m looking for a job as a <span className="text-red-600">front-end developer</span>. </p>
          <p className='main-text'>Working as a product manager for the last 3 years I discovered my passion to User Interfaces and User Expierience. My urge to learn different UI approaches led me to the front-end development.</p>
          <p className='main-text'>I also have a experience in product design, project management and customer care.</p>
          {/* <p className='main-text'>
            <button
              type='button'
              onClick={showPreviousJobsModal}
              className='main-link'>
              Here
            </button>
            <span> </span> you can know more about my previous jobs.
          </p> */}
        </div>
      </div>
    </section>
  );
};
