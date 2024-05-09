import { ComponentProps } from 'react';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & ComponentProps<'input'>;

const InputField = ({ label, value, setValue, ...props }: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default InputField;
