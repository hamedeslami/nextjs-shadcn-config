import { z } from "zod"
import OTP_MESSAGES from "./message"

export const OtpSchema = z.object({
    pin: z.string().min(6, {
      message: OTP_MESSAGES['otpNotValid'],
    }),
  })