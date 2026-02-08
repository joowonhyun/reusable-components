import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full typo-16 text-black focus:outline-none placeholder:text-assistive border-line flex w-full gap-4 rounded-lg border p-4",
  {
    variants: {
      size: {
        md: "px-12 py-8 h-40 typo-16",
        lg: "px-20 py-12 h-48 typo-20",
      },
      disabled: {
        true: "bg-alternative text-disabled placeholder:text-disabled",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);
