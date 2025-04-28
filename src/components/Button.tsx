import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "border-2 border-black text-black bg-white hover:bg-neutral-200",
      secondary:
        "border-2 border-white text-white bg-black hover:bg-neutral-800",
      danger: "border-none text-white bg-red-500 hover:bg-red-600",
    },
    size: {
      sm: "text-sm px-1 py-0 ",
      md: "text-base px-2 py-1 ",
      lg: "text-xl px-4 py-1 ",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default Button;
