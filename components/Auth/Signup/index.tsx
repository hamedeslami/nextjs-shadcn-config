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
import { Lock, User, AtSign, Phone } from "lucide-react";
import { SignupSchema } from "./signupSchema";
import SIGNUP_MESSAGES from "./message";
import Link from "next/link";

export default function SignupForm() {

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      rePassword: ""
    }
  });

  function onSubmit(data: z.infer<typeof SignupSchema>) {
    console.log(data);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{SIGNUP_MESSAGES["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {SIGNUP_MESSAGES["existAccount"]}
          <Link href="/auth/login" className="text-slate-800 mr-2">
            {SIGNUP_MESSAGES["login"]}
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="text"
                      placeholder={SIGNUP_MESSAGES["firstname"]}
                      field={field}
                      error={form.formState.errors.firstname}
                      icon={User}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="text"
                      placeholder={SIGNUP_MESSAGES["lastname"]}
                      field={field}
                      error={form.formState.errors.lastname}
                      icon={User}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="text"
                      placeholder={SIGNUP_MESSAGES["email"]}
                      field={field}
                      error={form.formState.errors.email}
                      icon={AtSign}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="text"
                      placeholder={SIGNUP_MESSAGES["mobile"]}
                      field={field}
                      error={form.formState.errors.mobile}
                      icon={Phone}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="password"
                      placeholder={SIGNUP_MESSAGES["password"]}
                      field={field}
                      error={form.formState.errors.password}
                      icon={Lock}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>

                    <InputIcons
                      type="password"
                      placeholder={SIGNUP_MESSAGES["rePassword"]}
                      field={field}
                      error={form.formState.errors.rePassword}
                      icon={Lock}
                    />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button type="submit">
              {SIGNUP_MESSAGES["submit"]}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
