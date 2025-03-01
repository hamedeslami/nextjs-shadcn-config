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
import { ForgotPasswordFormSchema } from "./forgotPasswordFormSchema";
import ForgotPasswordMessage from "./message";
import { toast } from "sonner";


export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      mobile: ""
    }
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordFormSchema>) {
    toast.success(`کد تایید به شماره موبایل ${data.mobile} ارسال شد.`);
    console.log(data);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{ForgotPasswordMessage["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {ForgotPasswordMessage["description"]}
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
                    <InputIcons type="text" placeholder={ForgotPasswordMessage["mobile"]} field={field} error={form.formState.errors.mobile} icon={Phone}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-3">
              <Button type="submit">
                {ForgotPasswordMessage["submit"]}
              </Button>
            </div>
            <div className="flex justify-center mt-3">
              <Link href="/auth/login" className="text-slate-600 text-xs mt-3">
                {ForgotPasswordMessage["backHome"]}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
