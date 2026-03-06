export interface Advisor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: string;
  callFee: string;
  callFeeAmount: number;
  bio: string;
  initials: string;
  accentColor: string;
}

export const ADVISORS: Advisor[] = [
  {
    id: "adv1",
    name: "Priya Sharma",
    specialization: "Mutual Funds & SIP Planning",
    experience: "8 years",
    rating: "4.9",
    callFee: "₹399",
    callFeeAmount: 399,
    bio: "Former wealth manager at HDFC, Priya helps young professionals build disciplined SIP habits and long-term mutual fund portfolios tailored to their risk appetite.",
    initials: "PS",
    accentColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "adv2",
    name: "Rajesh Menon",
    specialization: "Tax Planning & ITR",
    experience: "12 years",
    rating: "4.8",
    callFee: "₹499",
    callFeeAmount: 499,
    bio: "A Chartered Accountant with deep expertise in income tax planning, Rajesh helps salaried professionals save tax legally and file accurate returns.",
    initials: "RM",
    accentColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "adv3",
    name: "Ananya Iyer",
    specialization: "Retirement & Goal Planning",
    experience: "10 years",
    rating: "4.7",
    callFee: "₹449",
    callFeeAmount: 449,
    bio: "Ananya specialises in life-stage financial planning — helping working professionals map out clear retirement timelines, NPS contributions, and corpus goals.",
    initials: "AI",
    accentColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "adv4",
    name: "Vikram Bose",
    specialization: "Insurance & Risk Management",
    experience: "9 years",
    rating: "4.6",
    callFee: "₹299",
    callFeeAmount: 299,
    bio: "Vikram cuts through insurance confusion to recommend only what you genuinely need — term life, health cover, and critical illness riders with zero upselling.",
    initials: "VB",
    accentColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "adv5",
    name: "Meera Kapoor",
    specialization: "Equity & Stock Market Basics",
    experience: "7 years",
    rating: "4.8",
    callFee: "₹599",
    callFeeAmount: 599,
    bio: "A SEBI-registered investment advisor, Meera demystifies the stock market for first-time equity investors — focusing on fundamentals, not speculation.",
    initials: "MK",
    accentColor: "bg-rose-100 text-rose-700",
  },
];
