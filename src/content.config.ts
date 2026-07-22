import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { categories } from "./lib/categories";

const categoryNames = categories.map((c) => c.name) as [string, ...string[]];

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    category: z.enum(categoryNames),
  }),
});

export const collections = { products };
