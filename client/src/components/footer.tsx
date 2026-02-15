import { Link } from "wouter";
import { Train, Phone, MapPin, Clock } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Train className="h-5 w-5 text-primary" />
              <span className="font-serif font-bold text-lg">Breakfast Station #319</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A charming breakfast spot nestled in a converted railroad station in the heart of Somersworth, NH.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/p/Breakfast-Station-319-100084926203677/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/breakfaststation319/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-muted-foreground cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Visit Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  6 Main St, Somersworth, NH 03878
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+16038415567"
                  className="text-sm text-muted-foreground"
                  data-testid="link-footer-phone"
                >
                  (603) 841-5567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon-Fri: 7am - 2pm</p>
                  <p>Sat-Sun: 7am - 3pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Breakfast Station #319. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
