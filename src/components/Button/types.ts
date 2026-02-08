import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './variants.ts'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  disabled?: boolean
}

export type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'white'
  | 'progress'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
