import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Knowledge Base ───────────────────────────────────────────────────────────

type Intent = { patterns: string[]; response: string };

const intents: Intent[] = [
  // Financial Planning
  {
    patterns: ["sip", "systematic investment", "mutual fund", "mutualfund"],
    response:
      "SIP (Systematic Investment Plan) lets you invest a fixed amount every month in a mutual fund. It builds wealth gradually through rupee-cost averaging — you buy more units when markets are low and fewer when high. Even ₹500/month can grow significantly over 10–20 years.",
  },
  {
    patterns: ["budget", "50-30-20", "budgeting", "expenses", "spending"],
    response:
      "A simple rule is 50-30-20: 50% of income for needs (rent, groceries), 30% for wants (dining, subscriptions), and 20% for savings and investments. Tracking your spending for one month is a great first step.",
  },
  {
    patterns: ["emergency fund", "emergency", "liquid fund", "rainy day"],
    response:
      "An emergency fund should cover 3–6 months of your living expenses and be kept in a liquid instrument like a savings account or liquid mutual fund. It protects you from selling investments during a crisis.",
  },
  {
    patterns: ["retirement", "retire", "pension", "nps", "ppf"],
    response:
      "Start as early as possible. The power of compounding means ₹10,000/month invested at 30 can grow to much more than the same invested at 40. NPS and PPF are popular retirement instruments in India.",
  },
  {
    patterns: ["tax", "80c", "section 80", "tax saving", "elss", "deduction"],
    response:
      "Under Section 80C you can claim deductions up to ₹1.5 lakh per year. Popular options include ELSS mutual funds, PPF, NPS, and life insurance premiums. ELSS has the shortest lock-in of 3 years among 80C options.",
  },
  {
    patterns: [
      "insurance",
      "term insurance",
      "life cover",
      "health insurance",
      "ulip",
    ],
    response:
      "Insurance and investment are two different things. Buy term insurance for life cover (high cover, low premium) and a separate health insurance plan. Avoid mixing them with investment-linked policies like ULIPs unless you fully understand the costs.",
  },
  {
    patterns: [
      "goal",
      "goals",
      "short term",
      "long term",
      "medium term",
      "timeline",
    ],
    response:
      "Align every investment with a goal and timeline. Short-term goals (under 3 years): use FDs or liquid funds. Medium-term (3–7 years): hybrid or balanced funds. Long-term (7+ years): equity mutual funds or index funds.",
  },
  {
    patterns: ["debt", "loan", "credit card", "emi", "interest"],
    response:
      "High-interest debt (credit cards, personal loans) should be paid off first before aggressive investing. The interest you save is equal to guaranteed returns. Once high-cost debt is clear, focus on building your investment portfolio.",
  },
  {
    patterns: [
      "diversif",
      "portfolio",
      "allocation",
      "asset class",
      "gold",
      "equity",
      "spread",
    ],
    response:
      "Don't put all your money in one asset class. A diversified portfolio across equity, debt, and gold reduces risk because these asset classes don't always move in the same direction.",
  },
  {
    patterns: ["risk", "risk appetite", "risk profile", "risk tolerance"],
    response:
      "Your risk appetite depends on your age, income stability, and how you feel when markets fall. Young investors with stable income can afford more equity. As you approach a financial goal, reduce equity exposure to protect gains.",
  },
  {
    patterns: ["index fund", "nifty", "sensex", "passive", "passive fund"],
    response:
      "Index funds passively track a market index like Nifty 50 or Sensex. They have very low expense ratios, no fund manager risk, and historically beat most actively managed funds over the long term. Ideal for beginners.",
  },
  {
    patterns: ["rebalance", "rebalancing", "target allocation", "realign"],
    response:
      "Rebalancing means realigning your portfolio back to your target allocation (e.g., 70% equity / 30% debt) once a year. It forces you to sell high and buy low systematically.",
  },
  {
    patterns: [
      "start investing",
      "how to invest",
      "begin invest",
      "first investment",
      "new investor",
      "beginner",
    ],
    response:
      "Great question! Start simple: (1) Build a 3-month emergency fund first, (2) Get term + health insurance, (3) Start a small SIP in an index fund with ₹500–₹1,000/month. As you learn more, you can diversify. Our advisors can build a personalised plan for you.",
  },
  // Product / Service
  {
    patterns: [
      "registration fee",
      "₹200",
      "rs 200",
      "200 rupees",
      "register",
      "sign up",
      "pricing",
      "cost",
      "price",
    ],
    response:
      "The one-time registration fee is ₹200. This gives you access to our AI chatbot for ongoing financial guidance. If you also want a live session with a certified advisor, that's ₹999 per call — so a total of ₹1,199 for your first advisor session.",
  },
  {
    patterns: [
      "book",
      "advisor call",
      "book a call",
      "call",
      "session",
      "advisor",
    ],
    response:
      "After registering, you'll be taken to our advisor selection page where you can choose from our team of certified advisors based on their specialisation. You can book a call at ₹999 per session. There are no subscriptions — pay only when you need a call.",
  },
  {
    patterns: [
      "keynes",
      "counsel",
      "what is",
      "about",
      "platform",
      "service",
      "what do you do",
    ],
    response:
      "Keynes & Counsel is a guidance-only financial advisory platform. We help working professionals make informed financial decisions through AI-powered guidance and on-demand expert calls. We do not sell investment products or earn commissions.",
  },
  {
    patterns: [
      "data",
      "privacy",
      "secure",
      "security",
      "safe",
      "personal information",
    ],
    response:
      "Your data is encrypted and stored securely. We do not share your information with any third party, including banks or financial product providers. Your privacy is non-negotiable for us.",
  },
  {
    patterns: [
      "commission",
      "bias",
      "conflict",
      "unbiased",
      "neutral",
      "honest",
    ],
    response:
      "Our advisors are paid by us, not by product companies. This means they have zero incentive to push any specific product. Our only goal is to give you honest, unbiased advice.",
  },
  {
    patterns: [
      "who are the advisors",
      "certified",
      "sebi",
      "amfi",
      "experience",
      "qualified",
      "qualifications",
    ],
    response:
      "Our advisors are SEBI-registered or AMFI-certified financial professionals with experience ranging from 8 to 15+ years. You can view their profiles, specialisations, and ratings on the advisor selection page.",
  },
  {
    patterns: ["subscription", "lock-in", "cancel", "monthly fee", "recurring"],
    response:
      "There are no subscriptions or lock-ins at Keynes & Counsel. You pay a one-time ₹200 registration for AI chatbot access, and ₹999 per advisor call whenever you need one. That's it — complete flexibility.",
  },
  {
    patterns: ["hello", "hi", "hey", "good morning", "good evening", "namaste"],
    response:
      "Hello! I'm your Keynes & Counsel financial assistant. I can help you with questions about investing, financial planning, wealth management, or our services. What would you like to know?",
  },
];

function getResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  const words = input.split(/\s+/);

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      // Check if the full pattern is a substring of the input
      if (input.includes(pattern)) return intent.response;
      // Also check word-by-word for single keywords
      for (const word of words) {
        if (word.startsWith(pattern) || pattern.startsWith(word)) {
          if (word.length >= 4 && pattern.length >= 4) return intent.response;
        }
      }
    }
  }

  return "That's a great question. For detailed or personalised guidance, I'd recommend booking a call with one of our expert advisors. You can also browse our FAQ section above for common questions.";
}

// ─── Types ────────────────────────────────────────────────────────────────────

type MessageRole = "user" | "bot";

interface Message {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}

const quickChips = [
  "How do I start investing?",
  "What is SIP?",
  "How does SIP work?",
  "What is the registration fee?",
  "How do I book an advisor?",
  "What is an emergency fund?",
  "Help me with tax saving",
];

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex items-end gap-2"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
        K&amp;C
      </div>
      <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-muted-foreground/60 inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.7,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Chat Message ─────────────────────────────────────────────────────────────

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isUser && (
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex-shrink-0">
          K&amp;C
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm"
            : "bg-muted text-foreground border border-border rounded-2xl rounded-bl-sm"
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chipsVisible, setChipsVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new message — intentionally re-runs on messages/isTyping change
  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll side-effect needs messages/isTyping triggers
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setChipsVisible(false);
    setIsTyping(true);

    // Simulate bot thinking delay
    setTimeout(
      () => {
        const botResponse = getResponse(trimmed);
        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: "bot",
          text: botResponse,
          timestamp: new Date(),
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMsg]);
      },
      800 + Math.random() * 400,
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(inputValue);
  }

  function handleChipClick(chip: string) {
    sendMessage(chip);
    inputRef.current?.focus();
  }

  return (
    <section
      id="chatbot"
      data-ocid="chatbot.section"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Bot className="w-4 h-4" />
            <span>AI Financial Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ask Anything — Finance or Our Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant answers to your financial questions. Our AI assistant
            covers investing basics, wealth planning, and everything about our
            service.
          </p>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden flex flex-col"
            style={{ minHeight: "480px", maxHeight: "600px" }}
          >
            {/* Chat Top Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/40">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                K&amp;C
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Keynes &amp; Counsel Assistant
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  <p className="text-xs text-muted-foreground">
                    Online — instant replies
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scroll-smooth">
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex-shrink-0">
                    K&amp;C
                  </div>
                  <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-foreground leading-relaxed max-w-[78%]">
                    Hello! I'm your Keynes &amp; Counsel assistant. Ask me
                    anything about investing, financial planning, or our
                    services. 👋
                  </div>
                </motion.div>
              )}

              {/* Rendered messages */}
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && <TypingIndicator />}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Chips */}
            <AnimatePresence>
              {chipsVisible && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-3"
                >
                  <p className="text-xs text-muted-foreground mb-2 font-medium">
                    Quick questions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickChips.map((chip, i) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleChipClick(chip)}
                        data-ocid={`chatbot.chip.${i + 1}`}
                        className="text-xs bg-primary/8 hover:bg-primary/15 text-primary border border-primary/20 rounded-full px-3 py-1.5 transition-colors cursor-pointer font-medium"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Area */}
            <div className="border-t border-border bg-card px-4 py-3">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about SIPs, tax saving, insurance, our services…"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                  data-ocid="chatbot.message.input"
                  className="flex-1 text-sm rounded-xl border-border focus-visible:ring-primary/30 bg-background"
                  aria-label="Type your financial question"
                  autoComplete="off"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  data-ocid="chatbot.send_button"
                  className="rounded-xl h-9 w-9 flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground/70 text-center mt-2">
                This chatbot provides general financial education, not
                personalised investment advice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
