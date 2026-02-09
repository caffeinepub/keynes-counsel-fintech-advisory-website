import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { OurSolution } from './components/OurSolution';
import { HowItWorks } from './components/HowItWorks';
import { TrustSection } from './components/TrustSection';
import { Pricing } from './components/Pricing';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
