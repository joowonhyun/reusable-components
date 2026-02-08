import cn from "@/util/cn";
import { InputProps } from "./types";
import { inputVariants } from "./variants";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, disabled, children, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, disabled, className }))}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
