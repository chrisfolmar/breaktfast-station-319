import {
  type MenuCategory, type InsertMenuCategory,
  type MenuItem, type InsertMenuItem,
  type Testimonial, type InsertTestimonial,
  menuCategories, menuItems, testimonials,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getMenuCategories(): Promise<MenuCategory[]>;
  getMenuItems(): Promise<MenuItem[]>;
  getFeaturedMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createMenuCategory(category: InsertMenuCategory): Promise<MenuCategory>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getCategoryCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async getMenuCategories(): Promise<MenuCategory[]> {
    return db.select().from(menuCategories).orderBy(menuCategories.sortOrder);
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return db.select().from(menuItems);
  }

  async getFeaturedMenuItems(): Promise<MenuItem[]> {
    return db.select().from(menuItems).where(eq(menuItems.featured, true));
  }

  async getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]> {
    return db.select().from(menuItems).where(eq(menuItems.categoryId, categoryId));
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }

  async createMenuCategory(category: InsertMenuCategory): Promise<MenuCategory> {
    const [result] = await db.insert(menuCategories).values(category).returning();
    return result;
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const [result] = await db.insert(menuItems).values(item).returning();
    return result;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(testimonial).returning();
    return result;
  }

  async getCategoryCount(): Promise<number> {
    const result = await db.select().from(menuCategories);
    return result.length;
  }
}

export const storage = new DatabaseStorage();
