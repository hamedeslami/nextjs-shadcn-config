import { z } from "zod"
import OTPMessage from "./message"

export const OtpFormSchema = z.object({
    pin: z.string().min(6, {
      message: OTPMessage['otpNotValid'],
    }),
  })