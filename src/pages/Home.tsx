import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HomeSteps } from "@/components/home/HomeSteps";
import { HomeServices } from "@/components/home/HomeServices";
import { WhyLayzoxSection } from "@/components/home/WhyLayzoxSection";
import { VerificationSection } from "@/components/home/VerificationSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HomeSteps />
      <HomeServices />
      <WhyLayzoxSection />
      <VerificationSection />
      <CtaBanner />
    </>
  );
}
