import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useFaqEntries } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

const defaultFaqs = [
  {
    question: 'What is the ₹199 registration fee for?',
    answer: 'The one-time registration fee covers your account setup, access to our AI-powered guidance system, and the platform infrastructure. There are no recurring charges or subscriptions.',
  },
  {
    question: 'How much do advisor calls cost?',
    answer: 'Advisor calls are charged on a pay-per-use basis. You only pay when you book a call, and pricing is transparent and communicated upfront. There are no hidden fees or minimum commitments.',
  },
  {
    question: 'Do your advisors earn commissions on products?',
    answer: 'No. Our advisors are compensated by us, not by product providers. This means they have no financial incentive to recommend specific products—their only goal is to provide you with honest, conflict-free advice.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'Yes. We use bank-grade encryption to protect your data, and we never share your information with third parties. Your privacy and security are our top priorities.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'There\'s nothing to cancel! We don\'t have subscriptions or lock-in periods. You simply pay for the services you use, when you use them.',
  },
  {
    question: 'What kind of financial advice do you provide?',
    answer: 'We provide guidance on investment planning, portfolio allocation, retirement planning, tax optimization, and general financial decision-making. Our advice is educational and strategic—we don\'t sell or manage products.',
  },
];

export function FAQ() {
  const { data: faqEntries, isLoading } = useFaqEntries();

  const faqs = faqEntries && faqEntries.length > 0 ? faqEntries : defaultFaqs;

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our service and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card border rounded-lg p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}
