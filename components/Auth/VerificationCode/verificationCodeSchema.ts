import { z } from "zod"
import VERIFICATION_CODE_MESSAGES from "./message"

export const verificationCodeSchema = z.object({
    pin: z.string().min(6, {
      message: VERIFICATION_CODE_MESSAGES['otpNotValid'],
    }),
  })