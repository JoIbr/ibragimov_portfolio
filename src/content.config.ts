import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cases = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/cases" }),
  schema: z.object({
    logo: z.string().optional(),
    titleRu: z.string(),
    titleEn: z.string(),
    clientRu: z.string(),
    clientEn: z.string(),
    durationRu: z.string(),
    durationEn: z.string(),
    goalRu: z.string(),
    goalEn: z.string(),
    resultRu: z.string(),
    resultEn: z.string(),
    website: z.string().optional(),
    cover: z.string(),
    order: z.number(),
  }),
});

export const collections = { cases };