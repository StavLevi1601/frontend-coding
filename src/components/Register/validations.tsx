import { z } from "zod";

export const schema = z.object({
  username: z.string().min(1, "username is require"),
  password: z.string().min(1, "password is require"),
});

export type Schema = z.infer<typeof schema>;
