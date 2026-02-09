import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { usePricingDetails } from '@/hooks/useQueries';

const features = [
  'One-time registration fee',
  'AI-powered financial guidance',
  'Access to certified advisors',
  'Pay-per-call pricing',
  'No subscriptions or lock-ins',
  'Personalized action plans',
  'Secure data encryption',
  'Email support',
];

export function Pricing() {
  const { data: pricingDetails, isLoading } = usePricingDetails();

  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees, no surprises. Pay only for what you use.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Registration Fee
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">₹199</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              {pricingDetails && (
                <p className="text-sm text-muted-foreground mt-2">
                  {pricingDetails.description}
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              size="lg"
              onClick={scrollToGetStarted}
              disabled={isLoading}
            >
              Get Started Now
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Additional advisor calls are charged separately on a pay-per-use basis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
