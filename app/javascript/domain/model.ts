import { z } from "zod";

const EMAIL_REG =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

export type Inquiry = z.infer<typeof inquirySchema>;

export const inquirySchema = z.object({
  id: z.number().nullish(),
  name: z.string().min(1, "required"),
  email: z
    .string()
    .min(1, "required")
    .refine((value) => (value.length > 0 ? EMAIL_REG.test(value) : true), {
      message: "invalid email",
    }),
  category: z.union([
    z.literal("item"),
    z.literal("order"),
    z.literal("other"),
  ]),
  message: z.string().min(1, "required"),
  created_at: z.string().nullish(),
  updated_at: z.string().nullish(),
});

export const inquiryDefaultValue: Inquiry = {
  name: "",
  email: "",
  category: "item",
  message: "",
};
