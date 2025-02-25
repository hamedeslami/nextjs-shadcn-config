import { z } from "zod";
import LoginMessage from "./message";

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: LoginMessage["usernameMin"] })
    .max(20, { message: LoginMessage["usernameMax"] }),

  password: z
    .string()
    .min(1, { message: LoginMessage["passwordMin"] })
    .max(20, { message: LoginMessage["passwordMax"] })
});
