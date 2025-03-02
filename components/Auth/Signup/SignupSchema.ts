import { z } from "zod";
import SIGNUP_MESSAGES from "./message";

const FormSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: SIGNUP_MESSAGES["firstnameMin"] })
    .max(20, { message: SIGNUP_MESSAGES["firstnameMax"] }),

  lastname: z
    .string()
    .min(1, { message: SIGNUP_MESSAGES["lastnameMin"] })
    .max(20, { message: SIGNUP_MESSAGES["lastnameMax"] }),

  email: z
    .string()
    .min(1, { message: SIGNUP_MESSAGES["emailMin"] })
    .max(50, { message: SIGNUP_MESSAGES["emailMax"] })
    .email({ message: SIGNUP_MESSAGES["emailValidation"] }),

  password: z
    .string()
    .min(6, { message: SIGNUP_MESSAGES["passwordMin"] })
    .max(20, { message: SIGNUP_MESSAGES["passwordMax"] })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/,
      { message: SIGNUP_MESSAGES["passwordValidation"] }
    ),

  rePassword: z
    .string()
    .min(6, { message: SIGNUP_MESSAGES["rePasswordMin"] })
    .max(20, { message: SIGNUP_MESSAGES["rePasswordMax"] }),

  mobile: z
    .string()
    .min(1, { message: SIGNUP_MESSAGES["mobileMin"] })
    .max(11, { message: SIGNUP_MESSAGES["mobileMax"] })
    .regex(
      /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      { message: SIGNUP_MESSAGES["mobileValidation"] }
    )
});

export const SignupSchema = FormSchema.refine(
  (data) => data.password === data.rePassword,
  {
    message: SIGNUP_MESSAGES["rePasswordValidation"],
    path: ["rePassword"]
  }
);
