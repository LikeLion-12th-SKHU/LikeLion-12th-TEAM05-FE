import { cva, VariantProps } from 'class-variance-authority';
import { Label } from 'flowbite-react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    VariantProps<typeof inputVariants> {
  icon?: ReactNode;
}

const inputVariants = cva(
  'mb-2 text-sm transition-colors duration-300 w-[320px] h-[48px]',
  {
    variants: {
      variant: {
        primary:
          'bg-[#8C8CA1] border border-gray-300 text-[#ECF1F4] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        success: '',
        error: '',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export const Input = (props: InputProps) => {
  return (
    <div className="m-6">
      {props.id && <Label htmlFor={props.id}></Label>}
      <input type="text" {...props} className={inputVariants()} />
    </div>
  );
};
