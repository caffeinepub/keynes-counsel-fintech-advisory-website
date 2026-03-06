# Keynes & Counsel

## Current State
The website is a single-page marketing site with these sections: Hero, ProblemStatement, OurSolution, HowItWorks, TrustSection, Pricing, Team, FAQ, FinalCTA, Header, Footer. The backend has FAQ, team members, pricing, user registration, and contact message support. The registration form at the end of the page submits user details but does not redirect to any further flow.

## Requested Changes (Diff)

### Add
- **Personal details form** at the end of the homepage (replacing or augmenting FinalCTA) — collects name, email, phone, and consent; on submit it registers the user and navigates to the advisor selection page.
- **Advisor Selection Page (`/advisors`)** — displays a list of financial advisors with name, photo, specialization, experience, and a "Book a Call" button per advisor. Clicking redirects to the payment page with the selected advisor pre-filled.
- **Payment Page (`/payment`)** — shows the selected advisor's details, registration fee (₹199), call fee, total, and a simulated payment form (card number, expiry, CVV, name on card). On "Pay Now" it records the booking and shows a confirmation screen.
- **Booking data model in backend** — `Advisor` type (id, name, specialization, experience, rating, callFee, isAvailable), `Booking` type (userId, advisorId, userName, userEmail, userPhone, advisorName, amount, status, timestamp). Backend functions: `getAdvisors`, `createBooking`, `getBookingsByEmail`.
- **React Router** — wire up multi-page routing: `/` for the homepage, `/advisors` for advisor selection, `/payment` for payment.

### Modify
- **FinalCTA / registration form** — form submission now routes to `/advisors` instead of just showing a toast.
- **App.tsx** — add React Router with routes for all three pages.

### Remove
- Nothing removed from existing sections; all homepage content stays intact.

## Implementation Plan
1. Update backend `main.mo` to add `Advisor` and `Booking` types with `getAdvisors`, `createBooking`, `getBookingsByEmail` functions, plus seed advisor data.
2. Regenerate `backend.d.ts` to include new types and functions.
3. Add `react-router-dom` dependency.
4. Create `src/pages/HomePage.tsx` (wraps existing homepage sections), `src/pages/AdvisorSelectionPage.tsx`, `src/pages/PaymentPage.tsx`.
5. Update `App.tsx` to use `BrowserRouter` with routes.
6. Update `FinalCTA.tsx` to collect full personal details form and on submit navigate to `/advisors` with user state.
7. Build `AdvisorSelectionPage` listing advisors from backend, each card with "Book a Call" button navigating to `/payment?advisorId=...`.
8. Build `PaymentPage` showing order summary and simulated payment form, on success showing confirmation.
