import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/menu-categories", async (_req, res) => {
    const categories = await storage.getMenuCategories();
    res.json(categories);
  });

  app.get("/api/menu-items", async (_req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.get("/api/menu-items/featured", async (_req, res) => {
    const items = await storage.getFeaturedMenuItems();
    res.json(items);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  return httpServer;
}
