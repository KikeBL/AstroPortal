import { defineCollection, z } from "astro:content";

const courses = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    duration: z.number(),
    level: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    price: z.number(),
    lections: z.number(),
    tests: z.number(),
    teacher: z.string(),
    language: z.string(),
    teacher_img: z.string(),
    teacher_img_thumbnail: z.string(),
    banner: z.string(),
    table_of_contents: z.array(
      z.object({
        title: z.string(),
        content: z.object({
          subjects: z.array(z.object({
            subject: z.string(),
            subsubjects: z.array(z.string()).optional(),
        })) }),
        test: z.string().optional(),
        is_numerated: z.boolean().optional(),
      })
    ),
  }),
});

export const collections = { courses };