import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SEO } from "@/components/seo";
import { Star, Clock, MapPin, Phone, ArrowRight, UtensilsCrossed, ChefHat, Dog } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem, Testimonial } from "@shared/schema";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-exterior.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="outline" className="mb-4 text-white/90 border-white/30 bg-white/10 backdrop-blur-sm">
              Somersworth, NH
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            A Breakfast Worth
            <br />
            <span className="text-primary">the Journey</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg"
          >
            Nestled in a charming converted railroad station, we serve classic breakfast
            favorites with a creative twist. From our signature Benedicts to hearty
            international specialties, every dish tells a story.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Link href="/menu">
              <Button size="lg" data-testid="button-view-menu">
                View Our Menu
                <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <a href="tel:+16038415567">
              <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm" data-testid="button-call-us">
                <Phone className="mr-1" />
                Call to Reserve
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoBar() {
  const items = [
    { icon: Clock, label: "Mon-Fri", value: "7am - 2pm" },
    { icon: Clock, label: "Sat-Sun", value: "7am - 3pm" },
    { icon: MapPin, label: "Location", value: "6 Main St, Somersworth" },
    { icon: Phone, label: "Call Us", value: "(603) 841-5567" },
  ];

  return (
    <section className="bg-card border-y" data-testid="section-info-bar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 py-5 px-2 ${
                i > 0 ? "border-l" : ""
              }`}
            >
              <item.icon className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedDishes() {
  const { data: items, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu-items/featured"],
  });

  return (
    <section className="py-20" data-testid="section-featured">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Our Favorites
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Featured Dishes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-md mx-auto">
            From classic eggs Benedict to unique international specialties, every plate is crafted with care.
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Skeleton className="h-48 rounded-t-xl rounded-b-none" />
                <CardContent className="pt-4">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items?.map((item) => (
              <motion.div key={item.id} variants={fadeUp}>
                <Card className="overflow-visible group">
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <Badge variant="secondary">{item.price}</Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.popular && (
                      <Badge variant="outline" className="mt-3">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-10">
          <Link href="/menu">
            <Button variant="outline" size="lg" data-testid="button-full-menu">
              View Full Menu
              <ArrowRight className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 bg-card" data-testid="section-about-preview">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Where History Meets Flavor
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              Breakfast Station #319 is more than just a restaurant. Housed in a beautifully
              converted railroad station right next to Train Station #319, our space blends
              historic charm with modern culinary creativity.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
              Our hardworking family is dedicated to providing excellent food and service.
              From Romanian and Moldavian breakfasts to Italian-inspired Calabrian specials,
              we bring international flavors to your morning plate.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-8">
              {[
                { icon: UtensilsCrossed, label: "Fresh Ingredients" },
                { icon: ChefHat, label: "Family Recipes" },
                { icon: Dog, label: "Dog Friendly" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src="/images/interior.png"
              alt="Breakfast Station #319 interior"
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section className="py-20" data-testid="section-testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            What People Say
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Guest Reviews
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-md mx-auto">
            Don't just take our word for it. Here's what our guests have to say about their experience.
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials?.slice(0, 6).map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                      "{t.content}"
                    </p>
                    <p className="text-sm font-semibold">- {t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20" data-testid="section-cta">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/food-benedict.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Great Breakfast?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 max-w-md mx-auto mb-8">
            Stop by for dine-in, give us a call for takeout, or order delivery through DoorDash.
            We can't wait to serve you.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3">
            <a href="tel:+16038415567">
              <Button size="lg" data-testid="button-cta-call">
                <Phone className="mr-1" />
                (603) 841-5567
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 bg-white/10 backdrop-blur-sm"
                data-testid="button-cta-directions"
              >
                <MapPin className="mr-1" />
                Get Directions
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="Breakfast Station #319 is a charming breakfast restaurant in a converted railroad station in Somersworth, NH. Classic favorites, international specialties, and signature drinks."
        path="/"
      />
      <HeroSection />
      <InfoBar />
      <FeaturedDishes />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
