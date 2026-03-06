import { Button } from "@/components/ui/button";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { location } = useRouterState();
  const isHomePage = location.pathname === "/";

  const handleNavAction = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate({ to: "/" });
      // Small delay to let the page mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          data-ocid="header.link"
        >
          <span className="text-xl font-bold text-primary">
            Keynes &amp; Counsel
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => handleNavAction("how-it-works")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.how_it_works.link"
          >
            How It Works
          </button>
          <button
            type="button"
            onClick={() => handleNavAction("pricing")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.pricing.link"
          >
            Pricing
          </button>
          <button
            type="button"
            onClick={() => handleNavAction("team")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.about.link"
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => handleNavAction("faq")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.faq.link"
          >
            FAQ
          </button>
          <Button
            onClick={() => handleNavAction("get-started")}
            size="sm"
            data-ocid="nav.get_started.button"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              type="button"
              onClick={() => handleNavAction("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              data-ocid="nav.mobile.how_it_works.link"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => handleNavAction("pricing")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              data-ocid="nav.mobile.pricing.link"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => handleNavAction("team")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              data-ocid="nav.mobile.about.link"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleNavAction("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              data-ocid="nav.mobile.faq.link"
            >
              FAQ
            </button>
            <Button
              onClick={() => handleNavAction("get-started")}
              className="w-full"
              data-ocid="nav.mobile.get_started.button"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
