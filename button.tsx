import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; size?: "default" | "lg"; variant?: "default" | "outline" };
export function Button({ className, asChild, size = "default", variant = "default", ...props }: ButtonProps) {
  const Comp: any = asChild ? Slot : "button";
  return <Comp className={cn("inline-flex items-center justify-center rounded-md font-medium transition disabled:pointer-events-none disabled:opacity-50", size === "lg" ? "h-11 px-8 text-base" : "h-10 px-4 py-2", variant === "outline" ? "border border-input bg-background" : "", className)} {...props} />;
}
