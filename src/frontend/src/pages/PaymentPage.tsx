import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ADVISORS } from "@/data/advisors";
import { useUserStore } from "@/store/userStore";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  CreditCard,
  Loader2,
  Lock,
  ShieldCheck,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const REGISTRATION_FEE = 199;

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

export function PaymentPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/payment" });
  const { email: userEmail } = useUserStore();

  const advisorId = (search as Record<string, string>).advisorId ?? "";
  const advisor = ADVISORS.find((a) => a.id === advisorId) ?? ADVISORS[0];
  const total = REGISTRATION_FEE + advisor.callFeeAmount;

  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId] = useState(
    `BKG-${Math.floor(100000 + Math.random() * 900000)}`,
  );

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      data-ocid="payment.page"
    >
      <Header />
      <main className="flex-1 py-10 md:py-16">
        <div className="container max-w-5xl">
          {/* Back link */}
          <button
            type="button"
            onClick={() => navigate({ to: "/advisors" })}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to advisors
          </button>

          <AnimatePresence mode="wait">
            {!isConfirmed ? (
              <motion.div
                key="payment-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-foreground">
                  Secure Checkout
                </h1>
                <p className="text-muted-foreground mb-8">
                  Review your booking and complete payment
                </p>

                <div className="grid md:grid-cols-5 gap-6 items-start">
                  {/* Order Summary */}
                  <Card className="md:col-span-2 border-border/60 shadow-xs">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-semibold">
                        Order Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Advisor Info */}
                      <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg">
                        <div
                          className={`h-11 w-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${advisor.accentColor}`}
                        >
                          {advisor.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">
                            {advisor.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {advisor.specialization}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-medium text-foreground">
                              {advisor.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Line Items */}
                      <div className="space-y-2.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Registration fee
                          </span>
                          <span className="font-medium text-foreground">
                            ₹{REGISTRATION_FEE}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Advisory call fee
                          </span>
                          <span className="font-medium text-foreground">
                            {advisor.callFee}
                          </span>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary text-lg">₹{total}</span>
                      </div>

                      <div className="bg-primary/5 rounded-lg p-3 text-xs text-muted-foreground text-center space-y-1">
                        <p className="font-medium text-foreground">
                          One-time registration
                        </p>
                        <p>Pay per call • No lock-in • Cancel anytime</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Form */}
                  <Card className="md:col-span-3 border-border/60 shadow-xs">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-semibold">
                          Complete Payment
                        </CardTitle>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Lock className="h-3.5 w-3.5" />
                          Secure
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePay} className="space-y-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="cardholder">Cardholder Name</Label>
                          <Input
                            id="cardholder"
                            type="text"
                            placeholder="Name as on card"
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                            disabled={isProcessing}
                            required
                            autoComplete="cc-name"
                            data-ocid="payment.cardholder.input"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="card-number">Card Number</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="card-number"
                              type="text"
                              placeholder="4242 4242 4242 4242"
                              value={cardNumber}
                              onChange={(e) =>
                                setCardNumber(formatCardNumber(e.target.value))
                              }
                              disabled={isProcessing}
                              required
                              autoComplete="cc-number"
                              inputMode="numeric"
                              maxLength={19}
                              className="pl-10"
                              data-ocid="payment.card_number.input"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="expiry"
                                type="text"
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={(e) =>
                                  setExpiry(formatExpiry(e.target.value))
                                }
                                disabled={isProcessing}
                                required
                                autoComplete="cc-exp"
                                inputMode="numeric"
                                maxLength={5}
                                className="pl-10"
                                data-ocid="payment.expiry.input"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="cvv">CVV</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="cvv"
                                type="password"
                                placeholder="•••"
                                value={cvv}
                                onChange={(e) =>
                                  setCvv(
                                    e.target.value
                                      .replace(/\D/g, "")
                                      .slice(0, 4),
                                  )
                                }
                                disabled={isProcessing}
                                required
                                autoComplete="cc-csc"
                                inputMode="numeric"
                                maxLength={4}
                                className="pl-10"
                                data-ocid="payment.cvv.input"
                              />
                            </div>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full mt-2 gap-2"
                          disabled={isProcessing}
                          data-ocid="payment.submit_button"
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Lock className="h-4 w-4" />
                              Pay ₹{total} Securely
                            </>
                          )}
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                          256-bit SSL encrypted · Your data is safe
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-lg mx-auto py-8"
                data-ocid="payment.success_state"
              >
                <Card className="border-border/60 shadow-md text-center overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-accent via-primary to-accent" />
                  <CardContent className="pt-10 pb-8 space-y-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="flex justify-center"
                    >
                      <div className="h-20 w-20 bg-emerald-50 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                      </div>
                    </motion.div>

                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-1">
                        Booking Confirmed!
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Booking ID:{" "}
                        <span className="font-mono font-semibold text-foreground">
                          {bookingId}
                        </span>
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4 text-sm space-y-2.5 text-left">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${advisor.accentColor}`}
                        >
                          {advisor.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {advisor.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {advisor.specialization}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <p className="text-foreground font-medium">
                        Your advisor {advisor.name.split(" ")[0]} will call you
                        within 24 hours.
                      </p>
                      {userEmail && (
                        <p>
                          A confirmation has been sent to{" "}
                          <span className="font-medium text-foreground">
                            {userEmail}
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground bg-muted/20 rounded-lg p-3">
                      <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                      Your call is strictly guidance-only. No products will be
                      sold.
                    </div>

                    <Button
                      onClick={() => navigate({ to: "/" })}
                      variant="outline"
                      className="w-full gap-2"
                      data-ocid="payment.back_home.button"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Home
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
