import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1200x800.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent dark overlay for improved text contrast */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white">
            Financial Guidance Without the Sales Pitch
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Get expert investment advice tailored to your goals. No commissions, no product pushing—just honest guidance when you need it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-base px-8"
              onClick={() => scrollToSection('get-started')}
            >
              Get Started for ₹199
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </Button>
          </div>

          <p className="text-sm text-white/80 pt-4">
            Transparent pricing • No subscriptions • Pay only for what you use
          </p>
        </div>
      </div>
    </section>
  );
}
