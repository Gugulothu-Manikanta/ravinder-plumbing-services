import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5">
        <div className="container flex items-center justify-between">
          <span className="hidden sm:inline">📍 Miyapur, Hyderabad, India</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a href="tel:+916303653794" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" /> +91 63036 53794
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="h-8 w-8 text-primary" />
          <div>
            <span className="font-display font-bold text-lg text-foreground leading-tight block">Ravinder Plumbing</span>
            <span className="text-xs text-muted-foreground">Services</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg">
            <a href="tel:+916303653794">
              <Phone className="h-4 w-4 mr-1" /> Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border pb-4">
          <nav className="container flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2 font-medium ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href="tel:+916303653794">
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
