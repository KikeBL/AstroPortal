import { defineCollection, z } from "astro:content";

const courses = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        duration: z.number(),
        level: z.string(),
        categories: z.array(z.string()),
        price: z.number(),
        lections: z.number(),
        tests: z.number(),
        teacher: z.string(),
        language: z.string()
    })
});

export const collections = { courses };