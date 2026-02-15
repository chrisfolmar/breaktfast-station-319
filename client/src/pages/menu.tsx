import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/seo";
import { Star, Info, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuCategory, MenuItem } from "@shared/schema";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className={`overflow-visible h-full ${item.image ? "" : ""}`}>
        {item.image && (
          <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <CardContent className={item.image ? "pt-4" : "pt-6"}>
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-semibold" data-testid={`text-menu-item-${item.id}`}>{item.name}</h3>
            <Badge variant="secondary">{item.price}</Badge>
          </div>
          {item.description && (
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {item.description}
            </p>
          )}
          {item.popular && (
            <Badge variant="outline" className="mt-2">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function MenuPage() {
  const { data: categories, isLoading: catLoading } = useQuery<MenuCategory[]>({
    queryKey: ["/api/menu-categories"],
  });

  const { data: items, isLoading: itemsLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu-items"],
  });

  const isLoading = catLoading || itemsLoading;

  const sortedCategories = categories?.sort((a, b) => a.sortOrder - b.sortOrder) ?? [];

  const getItemsForCategory = (categoryId: number) =>
    items?.filter((item) => item.categoryId === categoryId) ?? [];

  return (
    <div className="pt-16">
      <SEO
        title="Menu"
        description="Explore the full menu at Breakfast Station #319. Eggs Benedict, omelets, Moldavian breakfast, pancakes, burgers, signature mimosas, and more. Somersworth, NH."
        path="/menu"
        image="/images/food-benedict.png"
      />
      <section className="relative py-16 bg-card border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              What We Serve
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Our Menu
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
              From classic breakfast favorites to unique international specialties,
              every dish is made fresh to order with quality ingredients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12" data-testid="section-menu">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="space-y-8">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-9 w-28 rounded-md shrink-0" />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : sortedCategories.length > 0 ? (
            <Tabs defaultValue={String(sortedCategories[0]?.id)} className="w-full">
              <div className="overflow-x-auto pb-2 -mx-4 px-4 mb-6">
                <TabsList className="inline-flex w-auto">
                  {sortedCategories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={String(cat.id)}
                      data-testid={`tab-category-${cat.id}`}
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {sortedCategories.map((cat) => {
                const categoryItems = getItemsForCategory(cat.id);
                return (
                  <TabsContent key={cat.id} value={String(cat.id)}>
                    {cat.description && (
                      <p className="text-muted-foreground mb-6">{cat.description}</p>
                    )}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={stagger}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {categoryItems.map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                      ))}
                    </motion.div>
                    {categoryItems.length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        No items available in this category right now.
                      </p>
                    )}
                  </TabsContent>
                );
              })}
            </Tabs>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Menu is being updated. Please check back soon.
            </p>
          )}

          <div className="mt-10 flex items-start gap-3 p-4 rounded-lg bg-muted/50 border" data-testid="menu-dietary-note">
            <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              We offer gluten-free and vegan options. Please let your server know about any dietary restrictions
              or allergies, and we'll do our best to accommodate you. Prices may vary; ask your server for details.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Questions about our menu or want to place a takeout order?
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a href="tel:+16038415567">
                <Button data-testid="button-menu-call">
                  <Phone className="mr-1" />
                  (603) 841-5567
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-menu-visit">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
