import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OurSolution } from "@/components/OurSolution";
import { Pricing } from "@/components/Pricing";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Team } from "@/components/Team";
import { TrustSection } from "@/components/TrustSection";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <OurSolution />
        <HowItWorks />
        <TrustSection />
        <Pricing />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
