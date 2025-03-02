"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import InputIcons from "@/components/ui/wrappers/inputIcons";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ForgotPasswordSchema } from "./forgotPasswordSchema";
import FORGOT_PASSWORD_MESSAGES from "./message";
import { toast } from "sonner";


export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      mobile: ""
    }
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    toast.success(`کد تایید به شماره موبایل ${data.mobile} ارسال شد.`);
    console.log(data);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{FORGOT_PASSWORD_MESSAGES["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {FORGOT_PASSWORD_MESSAGES["description"]}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputIcons type="text" placeholder={FORGOT_PASSWORD_MESSAGES["mobile"]} field={field} error={form.formState.errors.mobile} icon={Phone}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-3">
              <Button type="submit">
                {FORGOT_PASSWORD_MESSAGES["submit"]}
              </Button>
            </div>
            <div className="flex justify-center mt-3">
              <Link href="/auth/login" className="text-slate-600 text-xs mt-3">
                {FORGOT_PASSWORD_MESSAGES["backHome"]}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
