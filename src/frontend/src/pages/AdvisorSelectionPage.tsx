import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ADVISORS } from "@/data/advisors";
import { useNavigate } from "@tanstack/react-router";
import { Clock, PhoneCall, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";

export function AdvisorSelectionPage() {
  const navigate = useNavigate();

  const handleBookCall = (advisorId: string) => {
    navigate({
      to: "/payment",
      search: { advisorId },
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      data-ocid="advisors.page"
    >
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-14 md:py-20 border-b bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
                <ShieldCheck className="h-4 w-4" />
                SEBI-compliant guidance only
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Choose Your Financial Advisor
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All our advisors are guidance-only — no commissions, no product
                pushing. Your interests, always first.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-b bg-muted/20 py-4">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Verified professionals
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-accent" />
                1-on-1 private calls
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Pay per call, no lock-in
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                4.6+ avg. advisor rating
              </div>
            </div>
          </div>
        </section>

        {/* Advisor Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVISORS.map((advisor, index) => (
                <motion.div
                  key={advisor.id}
                  data-ocid={`advisors.item.${index + 1}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col border border-border/60 shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    {/* Card Top Strip */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-accent/60 to-primary/30" />

                    <CardContent className="pt-6 pb-4 flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="h-14 w-14 shrink-0">
                          <AvatarFallback
                            className={`text-base font-bold ${advisor.accentColor}`}
                          >
                            {advisor.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground text-base leading-tight mb-1">
                            {advisor.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium truncate max-w-full"
                          >
                            {advisor.specialization}
                          </Badge>
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{advisor.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-medium text-foreground">
                            {advisor.rating}
                          </span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {advisor.bio}
                      </p>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between pt-0 pb-5 px-6 border-t mt-auto">
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          Per call
                        </p>
                        <p className="text-xl font-bold text-primary">
                          {advisor.callFee}
                        </p>
                      </div>
                      <Button
                        onClick={() => handleBookCall(advisor.id)}
                        data-ocid={`advisors.book_button.${index + 1}`}
                        className="gap-2"
                        size="sm"
                      >
                        <PhoneCall className="h-4 w-4" />
                        Book a Call
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <motion.p
              className="text-center text-sm text-muted-foreground mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              All advisors are thoroughly vetted and operate under strict
              guidance-only mandates.{" "}
              <span className="text-primary font-medium">
                No investments are sold.
              </span>
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
