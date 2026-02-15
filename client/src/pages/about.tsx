import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/seo";
import { Train, UtensilsCrossed, Users, Heart, Leaf, Dog, Baby, Sun } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: UtensilsCrossed,
    title: "Fresh Daily",
    description: "Every dish is made fresh to order using quality ingredients sourced locally when possible.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A wonderful, hardworking family dedicated to providing excellent food and warm service.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "From Romanian and Moldavian classics to Italian-inspired specials, our recipes carry tradition.",
  },
  {
    icon: Leaf,
    title: "Dietary Options",
    description: "Gluten-free and vegan options available. Just ask your server about accommodations.",
  },
  {
    icon: Dog,
    title: "Dog Friendly",
    description: "Enjoy our outdoor seating area with your four-legged friend by your side.",
  },
  {
    icon: Baby,
    title: "Kid Friendly",
    description: "A dedicated kids' menu and welcoming atmosphere make it perfect for the whole family.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      <SEO
        title="About"
        description="Learn the story behind Breakfast Station #319, a family-owned breakfast restaurant in a historic converted railroad station in Somersworth, NH."
        path="/about"
      />
      <section className="relative py-16 bg-card border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Our Story
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              About Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
              A charming breakfast haven in a historic converted railroad station.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" data-testid="section-about-story">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/hero-exterior.png"
                alt="Breakfast Station #319 exterior"
                className="rounded-xl w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <Train className="h-5 w-5 text-primary" />
                <Badge variant="outline">Est. in Somersworth</Badge>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold mb-6">
                From Railroad to Restaurant
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                Breakfast Station #319 sits in a beautifully repurposed railroad station,
                right adjacent to the historic Train Station #319 in Somersworth, New Hampshire.
                The building's high ceilings, exposed character, and natural light streaming through
                large windows create an atmosphere that's as memorable as the food.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                Our menu is a celebration of classic breakfast fare with thoughtful international twists.
                From Romanian and Moldavian heritage dishes to Italian-inspired Calabrian specials and
                traditional Polish breakfast sandwiches served on authentic potato pancakes, every plate
                tells a story of culinary passion.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                Run by a dedicated family, the restaurant has quickly become a beloved local staple.
                With wooden furnishings, a cozy breakfast bar, and outdoor seating perfect for sunny mornings,
                Breakfast Station #319 is more than a meal — it's an experience.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-about-interior">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-2 lg:order-1"
            >
              <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold mb-6">
                A Space with Character
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                Step inside and you'll immediately feel the charm. The original railroad station
                architecture has been thoughtfully preserved, with high ceilings that open up the
                space and wooden furnishings that add warmth. The breakfast bar with four seats
                offers an intimate dining experience, while the surrounding tables accommodate
                groups of all sizes.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                The natural light flooding through the large windows creates the perfect ambiance
                for a morning wake-up. As one guest noted, the "light-scaping" makes every visit
                feel bright and welcoming.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Outdoor seating available in season</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src="/images/interior.png"
                alt="Breakfast Station #319 cozy interior"
                className="rounded-xl w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              What Makes Us Special
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
