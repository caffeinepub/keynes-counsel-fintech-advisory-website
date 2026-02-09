const trustFactors = [
  {
    icon: '/assets/generated/transparency-icon-transparent.dim_64x64.png',
    title: 'Complete Transparency',
    description: 'Clear pricing, no hidden fees, and honest advice. You always know what you\'re paying for.',
  },
  {
    icon: '/assets/generated/low-cost-icon-transparent.dim_64x64.png',
    title: 'Fair Pricing',
    description: 'Pay only for the services you use. No expensive subscriptions or minimum commitments.',
  },
  {
    icon: '/assets/generated/privacy-icon-transparent.dim_64x64.png',
    title: 'Data Privacy',
    description: 'Your financial information is encrypted and secure. We never share your data with third parties.',
  },
  {
    icon: '/assets/generated/trust-icon-transparent.dim_64x64.png',
    title: 'Conflict-Free Advice',
    description: 'Our advisors earn no commissions on products. Their only goal is to help you succeed.',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Keynes & Counsel
          </h2>
          <p className="text-lg text-muted-foreground">
            We've built our service on principles of trust, transparency, and putting your interests first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 space-y-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <img
                    src={factor.icon}
                    alt={factor.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg">{factor.title}</h3>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
