import * as z from "zod";

export const survayFormSchema = z.object({
  question1: z.string().min(1, { message: "Yout have to select on item" }),
  question2: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  question3: z.array(z.number()),
  question4: z
    .string()
    .min(2, { message: "You have to write minimum of 2 characters" })
    .max(50, { message: "You can only write maximum of 50 characters" }),
  question5: z.date(),
});
