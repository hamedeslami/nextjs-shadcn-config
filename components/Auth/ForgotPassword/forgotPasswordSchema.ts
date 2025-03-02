import { z } from "zod";
import FORGOT_PASSWORD_MESSAGES from "./message";

export const ForgotPasswordSchema = z.object({
  mobile: z
    .string()
    .min(1, { message: FORGOT_PASSWORD_MESSAGES["mobileMin"] })
    .max(11, { message: FORGOT_PASSWORD_MESSAGES["mobileMax"] })
    .regex(
      /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      { message: FORGOT_PASSWORD_MESSAGES["mobileValidation"] }
    )
});
