import { z } from "zod";
import SignupMessage from "./message";

const FormSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: SignupMessage["firstnameMin"] })
    .max(20, { message: SignupMessage["firstnameMax"] }),

  lastname: z
    .string()
    .min(1, { message: SignupMessage["lastnameMin"] })
    .max(20, { message: SignupMessage["lastnameMax"] }),

  email: z
    .string()
    .min(1, { message: SignupMessage["emailMin"] })
    .max(50, { message: SignupMessage["emailMax"] })
    .email({ message: SignupMessage["emailValidation"] }),

  password: z
    .string()
    .min(6, { message: SignupMessage["passwordMin"] })
    .max(20, { message: SignupMessage["passwordMax"] })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/,
      { message: SignupMessage["passwordValidation"] }
    ),

  rePassword: z
    .string()
    .min(6, { message: SignupMessage["rePasswordMin"] })
    .max(20, { message: SignupMessage["rePasswordMax"] }),

  mobile: z
    .string()
    .min(1, { message: SignupMessage["mobileMin"] })
    .max(11, { message: SignupMessage["mobileMax"] })
    .regex(
      /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      { message: SignupMessage["mobileValidation"] }
    )
});

export const SignupFormSchema = FormSchema.refine(
  (data) => data.password === data.rePassword,
  {
    message: SignupMessage["rePasswordValidation"],
    path: ["rePassword"]
  }
);
