import { z } from "zod";
import ForgotPasswordMessage from "./message";

export const ForgotPasswordFormSchema = z.object({
  mobile: z
    .string()
    .min(1, { message: ForgotPasswordMessage["mobileMin"] })
    .max(11, { message: ForgotPasswordMessage["mobileMax"] })
    .regex(
      /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      { message: ForgotPasswordMessage["mobileValidation"] }
    )
});
