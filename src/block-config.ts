import { z } from "zod";

const catchValue = {} as never;

export const configSchema = z.object({
  settings: z
    .object({ name: z.string().optional(), tag: z.string().optional() })
    .optional(),
  text: z.string(),
  icon: z.string(),
  backgroundColor: z.string(),
  iconColor: z.string(),
  textColor: z.string(),
  additionalText: z.string()
});

export type Config = z.infer<typeof configSchema>;
