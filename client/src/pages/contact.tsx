import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/seo";
import { Phone, MapPin, Clock, Navigation, Car } from "lucide-react";
import { SiFacebook, SiInstagram, SiDoordash } from "react-icons/si";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const hours = [
  { day: "Monday", time: "7:00 AM - 2:00 PM" },
  { day: "Tuesday", time: "7:00 AM - 2:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 2:00 PM" },
  { day: "Thursday", time: "7:00 AM - 2:00 PM" },
  { day: "Friday", time: "7:00 AM - 2:00 PM" },
  { day: "Saturday", time: "7:00 AM - 3:00 PM" },
  { day: "Sunday", time: "7:00 AM - 3:00 PM" },
];

export default function Contact() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="pt-16">
      <SEO
        title="Contact & Location"
        description="Visit Breakfast Station #319 at 6 Main St, Somersworth, NH 03878. Open Mon-Fri 7am-2pm, Sat-Sun 7am-3pm. Call (603) 841-5567 for reservations."
        path="/contact"
      />
      <section className="relative py-16 bg-card border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Find Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Visit Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
              We're located in the heart of Somersworth, NH, right next to the historic Train Station #319.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12" data-testid="section-contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d-70.8736!3d43.2615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29c93f6c9c2c7%3A0x5a4c9b3e7f8d1e2a!2s6%20Main%20St%2C%20Somersworth%2C%20NH%2003878!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Breakfast Station #319 location"
                        data-testid="map-embed"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Car className="h-4 w-4 text-primary" />
                      Parking Information
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Several parking options are available nearby: pull-in parking on Main St and
                      High St, parallel spots on Station St near the library, or the Somersworth
                      Shopping Center lot. Main St and High St are the closest options.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="font-semibold">Contact Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">6 Main St, Somersworth, NH 03878</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <a
                            href="tel:+16038415567"
                            className="text-sm text-muted-foreground"
                            data-testid="link-contact-phone"
                          >
                            (603) 841-5567
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href="https://maps.google.com/?q=6+Main+St+Somersworth+NH+03878"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" data-testid="button-directions">
                          <Navigation className="mr-1" />
                          Get Directions
                        </Button>
                      </a>
                      <a href="tel:+16038415567">
                        <Button size="sm" data-testid="button-call">
                          <Phone className="mr-1" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Hours
                    </h3>
                    <div className="space-y-2">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className={`flex items-center justify-between gap-4 text-sm py-1 ${
                            h.day === today
                              ? "font-semibold text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {h.day === today && (
                              <Badge variant="default" className="text-[10px] px-1.5 py-0">Today</Badge>
                            )}
                            {h.day}
                          </span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">Follow & Order</h3>
                    <div className="space-y-2">
                      <a
                        href="https://www.facebook.com/p/Breakfast-Station-319-100084926203677/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground py-1.5"
                        data-testid="link-contact-facebook"
                      >
                        <SiFacebook className="h-4 w-4 shrink-0" />
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/breakfaststation319/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground py-1.5"
                        data-testid="link-contact-instagram"
                      >
                        <SiInstagram className="h-4 w-4 shrink-0" />
                        Instagram
                      </a>
                      <a
                        href="https://www.doordash.com/store/breakfast-station-somersworth-24796742/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground py-1.5"
                        data-testid="link-contact-doordash"
                      >
                        <SiDoordash className="h-4 w-4 shrink-0" />
                        Order on DoorDash
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
