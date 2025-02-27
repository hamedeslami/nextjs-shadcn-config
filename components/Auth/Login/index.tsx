"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, Lock, User, EyeOff } from "lucide-react";
import { LoginFormSchema } from "./loginFormSchema";
import LoginMessage from "./message";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

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
                  <div className="relative group">
                    <User
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                      size={18}
                    />

                    <Input
                      placeholder={LoginMessage["username"]}
                      {...field}
                      className={`pr-10 ${
                        form.formState.errors.username &&
                        "border-red-500 ring-0 focus-visible:ring-0"
                      }`}
                    />
                  </div>
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
                  <div className="relative group">
                    <Lock
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                      size={18}
                    />

                    <Input
                      placeholder={LoginMessage["password"]}
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className={`pr-10 pl-10 peer ${
                        form.formState.errors.password &&
                        "border-red-500 ring-0 focus-visible:ring-0"
                      }`}
                    />

                    <button
                      type="button"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
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
