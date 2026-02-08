import cn from "@/util/cn.ts";
import { ButtonProps } from "./types.ts";
import { buttonVariants } from "./variants.ts";

export const Button = ({
  children,
  className,
  color,
  size,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ color, size, disabled, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
