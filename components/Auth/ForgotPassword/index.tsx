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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ForgotPasswordFormSchema } from "./FormSchema";
import ForgotPasswordMessage from "./message";
import { toast } from "sonner"

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
                    <div className="relative group">
                      <Phone
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        type="text"
                        autoComplete="off"
                        placeholder={ForgotPasswordMessage["mobile"]}
                        {...field}
                        className={`pr-10 ${
                          form.formState.errors.mobile &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-3">
              <button className="w-full bg-slate-800 text-white p-3 rounded-[0.5rem] hover:bg-slate-700 transition-all duration-200">
                {ForgotPasswordMessage['submit']}
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <Link href="/auth/login" className="text-slate-600 text-xs mt-3">
                {ForgotPasswordMessage['backHome']}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
