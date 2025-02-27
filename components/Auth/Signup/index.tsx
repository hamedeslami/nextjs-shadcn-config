"use client";

import { useState } from "react";
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
import { Eye, Lock, User, EyeOff, AtSign, Phone } from "lucide-react";
import { SignupFormSchema } from "./SignupFormSchema";
import SignupMessage from "./message";
import Link from "next/link";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      rePassword: ""
    }
  });

  function onSubmit(data: z.infer<typeof SignupFormSchema>) {
    console.log(data);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-xl">{SignupMessage["title"]}</h1>
        <p className="mt-3 text-slate-500 text-sm">
          {SignupMessage["existAccount"]}
          <Link href="/auth/login" className="text-slate-800 mr-2">
            {SignupMessage["login"]}
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
                    <div className="relative group">
                      <User
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        placeholder={SignupMessage["firstname"]}
                        autoComplete="off"
                        {...field}
                        className={`pr-10 ${
                          form.formState.errors.firstname &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
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
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative group">
                      <User
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        placeholder={SignupMessage["lastname"]}
                        autoComplete="off"
                        {...field}
                        className={`pr-10 ${
                          form.formState.errors.lastname &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
                        }`}
                      />
                    </div>
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
                    <div className="relative group">
                      <AtSign
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        type="email"
                        autoComplete="off"
                        placeholder={SignupMessage["email"]}
                        {...field}
                        className={`pr-10 ${
                          form.formState.errors.email &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
                        }`}
                      />
                    </div>
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
                    <div className="relative group">
                      <Phone
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        type="text"
                        autoComplete="off"
                        placeholder={SignupMessage["mobile"]}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
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
                        placeholder={SignupMessage["password"]}
                        autoComplete="off"
                        type={showPassword ? "text" : "password"}
                        {...field}
                        className={`pr-10 pl-10 peer ${
                          form.formState.errors.password &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
                        }`}
                      />

                      <button
                        type="button"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
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
                    <div className="relative group">
                      <Lock
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        size={18}
                      />

                      <Input
                        placeholder={SignupMessage["rePassword"]}
                        autoComplete="off"
                        type={showRePassword ? "text" : "password"}
                        {...field}
                        className={`pr-10 pl-10 peer ${
                          form.formState.errors.rePassword &&
                          "border-red-500 border-red-500 ring-0 focus-visible:ring-0"
                        }`}
                      />

                      <button
                        type="button"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300"
                        onClick={() => setShowRePassword(!showRePassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button type="submit">{SignupMessage["submit"]}</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
