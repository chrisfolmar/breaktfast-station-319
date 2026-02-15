import { storage } from "./storage";
import type { InsertMenuCategory, InsertMenuItem, InsertTestimonial } from "@shared/schema";

export async function seedDatabase() {
  const count = await storage.getCategoryCount();
  if (count > 0) return;

  console.log("Seeding database with restaurant data...");

  const categories: InsertMenuCategory[] = [
    { name: "Eggs Any Style", description: "Classic eggs cooked just the way you like them, served with your choice of sides.", sortOrder: 1 },
    { name: "Omelets", description: "Fluffy omelets packed with fresh ingredients, served with home fries and toast.", sortOrder: 2 },
    { name: "Benedicts", description: "Our signature Benedicts with perfectly poached eggs and rich hollandaise sauce.", sortOrder: 3 },
    { name: "Specialties", description: "Unique dishes inspired by international flavors and family recipes.", sortOrder: 4 },
    { name: "Sweets", description: "Fluffy pancakes, French toast, and more for those with a sweet tooth.", sortOrder: 5 },
    { name: "Burgers & Handhelds", description: "Hearty lunch options including burgers, wraps, and sandwiches.", sortOrder: 6 },
    { name: "Sides", description: "The perfect additions to complete your meal.", sortOrder: 7 },
    { name: "Beverages", description: "Hot coffee, signature mimosas, Bloody Marys, and soft drinks.", sortOrder: 8 },
  ];

  const createdCategories: { [key: string]: number } = {};
  for (const cat of categories) {
    const created = await storage.createMenuCategory(cat);
    createdCategories[cat.name] = created.id;
  }

  const menuItemsData: InsertMenuItem[] = [
    { categoryId: createdCategories["Eggs Any Style"], name: "Two Eggs Any Style", description: "Two eggs cooked to order with home fries and toast", price: "$9.99", featured: false, popular: true },
    { categoryId: createdCategories["Eggs Any Style"], name: "Steak & Eggs", description: "Sirloin tips with two eggs any style, home fries, and toast", price: "$16.99", featured: false, popular: false },
    { categoryId: createdCategories["Eggs Any Style"], name: "Corned Beef Hash & Eggs", description: "Homemade corned beef hash topped with two eggs any style", price: "$14.99", featured: false, popular: false },

    { categoryId: createdCategories["Omelets"], name: "BYO Omelet", description: "Build your own with your choice of fillings", price: "$9.99", featured: false, popular: true },
    { categoryId: createdCategories["Omelets"], name: "Greek Omelet", description: "Spinach, tomato, feta cheese, and kalamata olives", price: "$12.99", featured: false, popular: false },
    { categoryId: createdCategories["Omelets"], name: "Western Omelet", description: "Ham, peppers, onions, and cheddar cheese", price: "$12.99", featured: false, popular: false },
    { categoryId: createdCategories["Omelets"], name: "Veggie Omelet", description: "Mushrooms, peppers, onions, tomato, and cheese", price: "$11.99", featured: false, popular: false },

    { categoryId: createdCategories["Benedicts"], name: "Classic Eggs Benedict", description: "Canadian bacon, poached eggs, and hollandaise on an English muffin", price: "$14.99", featured: true, popular: true, image: "/images/food-benedict.png" },
    { categoryId: createdCategories["Benedicts"], name: "Irish Bene Hash", description: "Corned beef hash topped with poached eggs and hollandaise", price: "$16.50", featured: false, popular: true },
    { categoryId: createdCategories["Benedicts"], name: "Pulled Pork Bene", description: "Slow-cooked pulled pork with poached eggs and chipotle hollandaise", price: "$16.50", featured: false, popular: false },
    { categoryId: createdCategories["Benedicts"], name: "Romanian Benedict", description: "A unique twist with Romanian-inspired toppings and hollandaise", price: "$16.50", featured: false, popular: false },
    { categoryId: createdCategories["Benedicts"], name: "BBQ Rib Bene", description: "BBQ ribs topped with poached eggs and chipotle hollandaise", price: "$17.99", featured: false, popular: false },

    { categoryId: createdCategories["Specialties"], name: "Moldavian Breakfast", description: "A hearty Eastern European breakfast plate with eggs, sausage, and traditional sides", price: "$15.99", featured: true, popular: true, image: "/images/food-moldavian.png" },
    { categoryId: createdCategories["Specialties"], name: "Calabrian Breakfast", description: "Italian-inspired breakfast special with a taste of southern Italy", price: "$15.99", featured: false, popular: true },
    { categoryId: createdCategories["Specialties"], name: "Polish Breakfast Sandwich", description: "Served on authentic potato pancakes, just as it should be made", price: "$13.99", featured: false, popular: true },
    { categoryId: createdCategories["Specialties"], name: "Biscuits and Gravy", description: "Fluffy biscuits smothered in rich house-made sausage gravy", price: "$16.50", featured: false, popular: true },
    { categoryId: createdCategories["Specialties"], name: "Breakfast Burrito", description: "Stuffed with scrambled eggs, cheese, peppers, and your choice of meat", price: "$14.50", featured: true, popular: true, image: "/images/food-burrito.png" },
    { categoryId: createdCategories["Specialties"], name: "Breakfast Sandwich", description: "Egg, cheese, and your choice of meat on a toasted English muffin", price: "$7.99", featured: false, popular: true, image: "/images/food-sandwich.png" },

    { categoryId: createdCategories["Sweets"], name: "Pancakes", description: "Fluffy buttermilk pancakes stacked high", price: "$10.99", featured: true, popular: true, image: "/images/food-pancakes.png" },
    { categoryId: createdCategories["Sweets"], name: "French Toast", description: "Thick-cut bread dipped in custard, griddled golden brown", price: "$11.99", featured: false, popular: false },
    { categoryId: createdCategories["Sweets"], name: "Seasonal Fruit Parfait", description: "Layers of yogurt, granola, and fresh seasonal fruits", price: "$8.99", featured: false, popular: false },

    { categoryId: createdCategories["Burgers & Handhelds"], name: "Classic Burger", description: "Half-pound beef patty with lettuce, tomato, and onion", price: "$12.99", featured: false, popular: false },
    { categoryId: createdCategories["Burgers & Handhelds"], name: "Shrimp Wrap", description: "Seasoned shrimp with fresh vegetables in a warm tortilla", price: "$15.99", featured: false, popular: false },
    { categoryId: createdCategories["Burgers & Handhelds"], name: "Vegan Sammie", description: "Plant-based sandwich with fresh vegetables and vegan spread", price: "$12.99", featured: false, popular: false },

    { categoryId: createdCategories["Sides"], name: "Home Fries", description: "Crispy seasoned potatoes", price: "$3.99", featured: false, popular: false },
    { categoryId: createdCategories["Sides"], name: "Bacon", description: "Thick-cut applewood smoked bacon", price: "$4.99", featured: false, popular: false },
    { categoryId: createdCategories["Sides"], name: "Homemade Chips", description: "House-made crispy potato chips", price: "$3.99", featured: false, popular: false },
    { categoryId: createdCategories["Sides"], name: "Toast", description: "White, wheat, or rye", price: "$2.99", featured: false, popular: false },

    { categoryId: createdCategories["Beverages"], name: "Coffee", description: "Freshly brewed with free refills", price: "$3.00", featured: false, popular: true },
    { categoryId: createdCategories["Beverages"], name: "Signature Mimosa", description: "Sparkling wine with fresh-squeezed juice in creative flavors", price: "$9.00", featured: true, popular: true, image: "/images/drinks-mimosa.png" },
    { categoryId: createdCategories["Beverages"], name: "Bloody Mary", description: "House-made with a nice spice of horseradish", price: "$10.00", featured: false, popular: true },
    { categoryId: createdCategories["Beverages"], name: "Soft Drinks", description: "Assorted sodas and juices", price: "$2.99", featured: false, popular: false },
  ];

  for (const item of menuItemsData) {
    await storage.createMenuItem(item);
  }

  const testimonialData: InsertTestimonial[] = [
    {
      name: "Steve Kurtz",
      content: "If you want good food in Somersworth this is the restaurant! It is an old railroad station converted to this nice little dining delight.",
      rating: 5,
    },
    {
      name: "Eric Maslak",
      content: "Absolutely worth five stars. The staff was outstanding and the food came quickly and was delicious. Polish breakfast sandwich was served on a potato pancake just as it should be made. Bloody Mary had a nice spice of horseradish.",
      rating: 5,
    },
    {
      name: "Kelly Ashe",
      content: "10/10. Can't say enough about this experience. I had the Calabrian Breakfast special, and having a taste of Italy for breakfast was definitely the way to go. Great service, excellent chef, perfect atmosphere.",
      rating: 5,
    },
    {
      name: "Becky Neal",
      content: "I've been here quite a few times and the food is always amazing! The eggs Benedict is by far some of the best I've ever had! They also have a nice selection of adult beverages. The service is always great.",
      rating: 5,
    },
    {
      name: "Mason Trombley",
      content: "Food was your old time classic diner breakfast - very good and not greasy. Clearly fresh. The prices are phenomenal and affordable compared to many places. I will definitely be back.",
      rating: 5,
    },
    {
      name: "Gayle W",
      content: "Really fun place. I had the homemade Jambalaya and Moldavian Breakfast - incredibly good. The service staff is prompt, kind, and attentive. Great natural light. Perfect for a morning wake up.",
      rating: 5,
    },
  ];

  for (const t of testimonialData) {
    await storage.createTestimonial(t);
  }

  console.log("Database seeded successfully!");
}
