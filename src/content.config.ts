import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/entries" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    href: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { entries };
