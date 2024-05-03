type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({ label, placeholder, value, setValue }: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-white">{label}</label>
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputField;
