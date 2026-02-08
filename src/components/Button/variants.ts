import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'rounded-lg font-bold flex justify-center items-center gap-8 cursor-pointer',
  {
    variants: {
      color: {
        default: 'bg-alternative text-normal',
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-primary',
        white: 'bg-white text-primary',
        progress: 'bg-main border-1 border-solid border-primary text-primary'
      },
      size: {
        sm: 'px-12 py-8 h-32 typo-12',
        md: 'px-20 py-12 h-44 typo-14',
        lg: 'px-20 py-12 h-48 typo-16',
        xl: 'px-24 py-12 h-48 typo-16'
      },
      disabled: {
        true: 'bg-alternative text-disabled'
      }
    },
    defaultVariants: {
      color: 'default',
      size: 'md'
    }
  }
)
