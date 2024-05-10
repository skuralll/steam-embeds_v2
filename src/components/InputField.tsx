import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  validation?: UseFormRegisterReturn<any>;
} & ComponentProps<'input'>;

const InputField = ({ label, validation, ...props }: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...props}
        {...validation}
      />
    </div>
  );
};

export default InputField;
