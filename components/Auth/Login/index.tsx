"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import InputIcons from "@/components/ui/wrappers/inputIcons";
import Link from "next/link";
import { Lock, User } from "lucide-react";
import { LoginFormSchema } from "./loginFormSchema";
import LoginMessage from "./message";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    console.log(data);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{LoginMessage["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {LoginMessage["notExistAccount"]}
          <Link href="/auth/signup" className="text-slate-800 mr-2">
            {LoginMessage["signup"]}
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputIcons
                    type="text"
                    placeholder={LoginMessage["username"]}
                    field={field}
                    error={form.formState.errors.username}
                    icon={User}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputIcons
                    type="password"
                    placeholder={LoginMessage["password"]}
                    field={field}
                    error={form.formState.errors.password}
                    icon={Lock}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4">
            <Link
              href="/auth/forgot-password"
              className="mt-[0.1rem] text-xs text-slate-500"
            >
              {LoginMessage["forgotPassword"]}
            </Link>

            <Button type="submit">{LoginMessage["submit"]}</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
