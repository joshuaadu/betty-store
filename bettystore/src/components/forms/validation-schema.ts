import z from "zod";

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirm_password: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    // terms: z.literal(true, {
    //   errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    // }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type registerType = z.infer<typeof registerSchema>;
export type signinType = z.infer<typeof signinSchema>;
