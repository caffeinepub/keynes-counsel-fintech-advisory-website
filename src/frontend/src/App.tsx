import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { AdvisorSelectionPage } from "./pages/AdvisorSelectionPage";
import { HomePage } from "./pages/HomePage";
import { PaymentPage } from "./pages/PaymentPage";

const hashHistory = createHashHistory();

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const advisorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/advisors",
  component: AdvisorSelectionPage,
});

const paymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment",
  component: PaymentPage,
  validateSearch: (search: Record<string, unknown>) => ({
    advisorId: (search.advisorId as string) ?? "",
  }),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  advisorsRoute,
  paymentRoute,
]);

const router = createRouter({
  routeTree,
  history: hashHistory,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
