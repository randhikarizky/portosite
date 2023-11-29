
import LandingComponent from '@/app/features/landing/presentation/components/LandingComponent';
import HeadComponent from '@/app/global/components/HeadComponent';
import { NextPage } from 'next';

const LandingPages: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <LandingComponent />
    </>
  );
};
export default LandingPages;
