import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-primary">Keynes & Counsel</h3>
            <p className="text-sm text-muted-foreground">
              Honest financial guidance without the sales pitch. Transparent pricing, expert advice, and your interests first.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Placeholder for Future Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Coming Soon</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="opacity-50">Blog & Resources</li>
              <li className="opacity-50">iOS App</li>
              <li className="opacity-50">Android App</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            © {currentYear}. Built with{' '}
            <Heart className="h-4 w-4 text-destructive fill-destructive inline" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
