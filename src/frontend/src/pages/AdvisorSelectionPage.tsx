import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ADVISORS } from "@/data/advisors";
import { useNavigate } from "@tanstack/react-router";
import { Bot, Check, Clock, PhoneCall, ShieldCheck, Star } from "lucide-react";
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

        {/* AI Chatbot Plan */}
        <section className="py-10 md:py-12">
          <div className="container">
            <motion.div
              data-ocid="advisors.ai_plan.card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="relative overflow-hidden border-2 border-accent/40 shadow-md bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5">
                {/* Top accent strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-primary to-accent" />

                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Left: Icon + Title */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Bot className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold text-foreground">
                            AI Financial Chatbot
                          </h2>
                          <Badge className="bg-accent/20 text-accent-foreground border border-accent/30 text-xs font-semibold">
                            Best for Beginners
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                          Get instant answers to your financial questions
                          anytime. Chat with our AI advisor for personalised
                          guidance — no waiting, no scheduling.
                        </p>
                      </div>
                    </div>

                    {/* Middle: Feature bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-x-6 md:gap-y-2 shrink-0">
                      {[
                        "Instant 24/7 AI guidance",
                        "Personalised financial Q&A",
                        "Beginner-friendly explanations",
                        "No advisor scheduling needed",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="h-4 w-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-primary" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Right: Price + CTA */}
                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 md:text-right">
                          One-time access
                        </p>
                        <p className="text-3xl font-bold text-primary">₹200</p>
                        <p className="text-xs text-muted-foreground mt-0.5 md:text-right">
                          No lock-in · Chat anytime
                        </p>
                      </div>
                      <Button
                        onClick={() =>
                          navigate({
                            to: "/payment",
                            search: { advisorId: "ai-only" },
                          })
                        }
                        data-ocid="advisors.ai_plan.button"
                        size="lg"
                        className="gap-2 w-full md:w-auto mt-1"
                      >
                        <Bot className="h-4 w-4" />
                        Get AI Access
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Advisor Grid */}
        <section className="py-6 md:py-10">
          <div className="container">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-foreground">
                Or book a 1-on-1 expert call
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                All advisor plans include AI Chatbot access.
              </p>
            </motion.div>
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
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                        {advisor.bio}
                      </p>

                      {/* AI Chatbot included badge */}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/40 rounded-md px-2.5 py-1.5 w-fit">
                        <Bot className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                        <span>Includes AI Chatbot access</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between pt-0 pb-5 px-6 border-t mt-auto">
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          ₹999 call + ₹200 registration
                        </p>
                        <p className="text-xl font-bold text-primary">
                          ₹1,199 total
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
