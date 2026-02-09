import { UserPlus, MessageSquare, Phone, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Register',
    description: 'Create your account with a one-time registration fee of ₹199. No subscriptions, no recurring charges.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Chat with AI',
    description: 'Get instant answers to your financial questions through our AI-powered guidance system.',
  },
  {
    icon: Phone,
    number: '03',
    title: 'Book Expert Calls',
    description: 'Schedule calls with certified advisors when you need personalized, in-depth guidance.',
  },
  {
    icon: FileCheck,
    number: '04',
    title: 'Get Your Action Plan',
    description: 'Receive a clear, actionable financial plan tailored to your goals and circumstances.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process designed to give you the guidance you need, when you need it.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card border rounded-lg p-8 space-y-4 hover:shadow-lg transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center ml-8">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
