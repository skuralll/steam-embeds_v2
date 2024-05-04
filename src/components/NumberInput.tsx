import { useState } from 'react';
import MinusIcon from './number_input/MinusIcon';
import PlusIcon from './number_input/PlusIcon';

type Props = {
  label: string;
  placeholder: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const NumberInput = ({ label, placeholder, value, setValue }: Props) => {
  const [minusDisabled, setMinusDisabled] = useState(false);
  // const [plusDisabled, setPlusDisabled] = useState(false);

  const setNumber = (newNumber: number) => {
    // nullかundefinedの場合は1にする
    if (newNumber == undefined || isNaN(newNumber)) {
      newNumber = 1;
    }
    // 1以下の場合は1にする,マイナスボタンを無効にする
    if (!minusDisabled && newNumber <= 1) {
      setMinusDisabled(true);
      newNumber = 1;
    } else if (minusDisabled && newNumber > 0) {
      // 1より大きい場合はマイナスボタンを有効にする
      setMinusDisabled(false);
    }
    setValue(newNumber);
  };

  return (
    <div className="max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <div className="relative flex items-center max-w-[8rem] h-10">
        <button
          type="button"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={() => setNumber(value - 1)}
          disabled={minusDisabled}
        >
          <MinusIcon />
        </button>
        <input
          type="text"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-x-0 border-gray-300 h-full text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          type="button"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={() => setNumber(value + 1)}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
