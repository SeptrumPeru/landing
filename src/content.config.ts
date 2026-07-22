import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { categories } from "./lib/categories";

const categoryNames = categories.map((c) => c.name) as [string, ...string[]];

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.enum(categoryNames),
      description: z.string().optional(),
      images: z.array(image()).optional(),
      specs: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .optional(),
    }),
});

export const collections = { products };
