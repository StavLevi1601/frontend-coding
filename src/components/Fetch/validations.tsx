import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Title is require"),
  body: z.string().min(1, "Body is require"),
});

export type Schema = z.infer<typeof schema>;
