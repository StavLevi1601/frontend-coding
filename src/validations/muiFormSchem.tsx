import { z } from "zod";

export const muiFormSchem = z.object({
  email: z.string().email("Email invalid"),
  name: z.string().min(1, "Name is required"),
});

export type MuiFormSchema = z.infer<typeof muiFormSchem>;
