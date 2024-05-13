import { ComponentProps, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ComponentProps<'button'>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-[rgb(72,99,124)] hover:bg-[rgb(92,119,144)] text-[#fff] font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 inline-flex justify-center items-center"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
