import LandingComponent from "@/app/features/landing/presentation/components/LandingComponent";
import HeadComponent from "@/app/global/components/HeadComponent";
import { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <LandingComponent />
    </>
  );
};
export default LandingPage;
