import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useRegisterUser } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export function FinalCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { mutate: registerUser, isPending } = useRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast.error('Please fill in all fields');
      return;
    }

    registerUser(
      { name, email, phone },
      {
        onSuccess: () => {
          toast.success('Registration successful! We\'ll be in touch soon.');
          setName('');
          setEmail('');
          setPhone('');
        },
        onError: () => {
          toast.error('Registration failed. Please try again.');
        },
      }
    );
  };

  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Investing Journey with Clarity
              </h2>
              <p className="text-lg text-muted-foreground">
                Join Keynes & Counsel today and get the honest financial guidance you deserve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isPending}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isPending}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isPending}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Get Started for ₹199'
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By registering, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
