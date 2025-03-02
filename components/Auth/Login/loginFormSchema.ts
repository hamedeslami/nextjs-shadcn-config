import { z } from "zod";
import LOGIN_MESSAGES from "./message";

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: LOGIN_MESSAGES["usernameMin"] })
    .max(20, { message: LOGIN_MESSAGES["usernameMax"] }),

  password: z
    .string()
    .min(1, { message: LOGIN_MESSAGES["passwordMin"] })
    .max(20, { message: LOGIN_MESSAGES["passwordMax"] })
});
