import { InputHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { inputVariants } from './variants'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'>,
    VariantProps<typeof inputVariants> {
  children?: ReactNode
  disabled?: boolean
  placeholder?: string
}
