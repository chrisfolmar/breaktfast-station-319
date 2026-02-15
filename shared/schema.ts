import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  image: text("image"),
  featured: boolean("featured").default(false),
  popular: boolean("popular").default(false),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5),
});

export const insertMenuCategorySchema = createInsertSchema(menuCategories).omit({ id: true });
export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });

export type InsertMenuCategory = z.infer<typeof insertMenuCategorySchema>;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type MenuCategory = typeof menuCategories.$inferSelect;
export type MenuItem = typeof menuItems.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
