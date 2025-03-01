"use client";

import { useState, ComponentType } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FieldError } from "react-hook-form";

interface InputIconsProps {
  icon: ComponentType<{ size?: number; className?: string }>;
  type: "text" | "password" | "number" | "email";
  placeholder?: string;
  field: object;
  error?: FieldError;
}

export default function InputIcons({
  icon: Icon,
  type,
  placeholder,
  field,
  error,
}: InputIconsProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative group">
      <Icon
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300 dark:text-gray-300 dark:group-focus-within:text-white"
        size={18}
      />

      <Input
        placeholder={placeholder}
        type={type === "password" && showPassword ? "text" : type}
        {...field}
        className={`h-12 w-full rounded-md pr-10 pl-10 peer ${error ? "border-red-500 ring-0 focus-visible:ring-0" : ""}`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-300 dark:text-gray-300 dark:group-focus-within:text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>

  );
}
