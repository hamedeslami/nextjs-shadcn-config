import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { OtpSchema } from "./otpSchema";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import Countder from "./counter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { PenLine } from "lucide-react";
import OTP_MESSAGES from "./message";

export default function FormOTP() {
  const [reset, setReset] = useState(false);
  const form = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      pin: ""
    }
  });

  const onSubmit = (data: z.infer<typeof OtpSchema>) => {
    console.log("otp code", data);
    toast.error("کد یکبار مصرف ارسال شده اشتباه می باشد.");
  };

  const sendHandler = () => {
    toast.success("کد یکبار مصرف ارسال شد.");
    setReset(false);
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{OTP_MESSAGES["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {OTP_MESSAGES["description"]}
        </p>
        <div className="flex flex-row gap-2 mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <PenLine
                  size={18}
                  className="text-blue-500 dark:text-blue-200"
                />
              </TooltipTrigger>
              <TooltipContent>{OTP_MESSAGES["editPhoneNumber"]}</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <p>09127693903</p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 mb-4"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field} autoFocus>
                    <InputOTPGroup dir="ltr">
                      {[...Array(6)].map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className={`h-14 w-14 text-2xl text-center dark:border-gray-700 ${
                            form.formState.errors.pin &&
                            `dark:border-red-500 border-red-500 ring-0 focus-visible:ring-0`
                          }`}
                          inputMode="numeric"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row">
            {reset ? (
              <div
                onClick={sendHandler}
                className="cursor-pointer text-sm text-blue-500 dark:text-blue-200"
              >
                {OTP_MESSAGES["sendAgain"]}
              </div>
            ) : (
              <div className="flex flex-row gap-2 justify-around text-sm">
                {OTP_MESSAGES["timer"]}
                <Countder initialSeconds={180} setReset={setReset} />
              </div>
            )}
          </div>

          <Button type="submit">{OTP_MESSAGES["submit"]}</Button>
        </form>
      </Form>
    </>
  );
}
