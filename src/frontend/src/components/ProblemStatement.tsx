import { AlertCircle, TrendingDown, HelpCircle, Lock } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Overwhelmed by Options',
    description: 'Too many investment products, conflicting advice, and no clear path forward.',
  },
  {
    icon: TrendingDown,
    title: 'Fear of Making Mistakes',
    description: 'Worried about losing money or making the wrong financial decisions.',
  },
  {
    icon: HelpCircle,
    title: 'Lack of Trust',
    description: 'Unsure if advisors have your best interests at heart or just want to sell products.',
  },
  {
    icon: Lock,
    title: 'Paralysis by Analysis',
    description: 'So much information available, yet unable to take action on your financial goals.',
  },
];

export function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investing Shouldn't Feel This Hard
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the challenges that keep you from taking control of your financial future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
