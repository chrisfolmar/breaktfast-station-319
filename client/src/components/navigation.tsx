import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { Moon, Sun, Menu, X, Train } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const handleNavClick = (href: string) => {
    if (location === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const isHome = location === "/";
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b"
      }`}
      data-testid="header-navigation"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
              <Train className={`h-6 w-6 ${isTransparent ? "text-white" : "text-primary"}`} />
              <span
                className={`font-serif font-bold text-lg ${
                  isTransparent ? "text-white" : "text-foreground"
                }`}
              >
                Breakfast Station #319
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => handleNavClick(link.href)}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href
                      ? isTransparent
                        ? "text-white bg-white/20"
                        : "text-primary"
                      : isTransparent
                        ? "text-white/80"
                        : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className={isTransparent ? "text-white" : ""}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className={`md:hidden ${isTransparent ? "text-white" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => handleNavClick(link.href)}>
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
