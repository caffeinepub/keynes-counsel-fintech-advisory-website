import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Guidance',
    description: 'Get instant answers to your financial questions through our intelligent chat system.',
    image: '/assets/generated/ai-guidance-icon-transparent.dim_64x64.png',
  },
  {
    title: 'Expert Human Advisors',
    description: 'Book calls with certified financial advisors for personalized, in-depth guidance.',
    image: '/assets/generated/expert-call-icon-transparent.dim_64x64.png',
  },
  {
    title: 'Actionable Plans',
    description: 'Receive clear, step-by-step action plans tailored to your financial goals.',
    image: '/assets/generated/action-plan-icon-transparent.dim_64x64.png',
  },
];

const benefits = [
  'No commissions or hidden fees',
  'No product pushing or sales pressure',
  'Pay only for the advice you need',
  'Complete transparency in pricing',
  'No long-term lock-ins or subscriptions',
];

export function OurSolution() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Honest Advice, Fair Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            We've built a financial advisory service that puts your interests first—no conflicts, no compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-6 text-center">Our Commitment to You</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
