import { useState } from 'react';
import Clipboard from './copy_text_field/Clipboard';
import Success from './copy_text_field/Success';

type Props = {
  label: string;
  text: string;
};

const CopyTextField = ({ label, text }: Props) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const onClickCopy = () => {
    // アイコンをSuccessに変更
    setShowSuccess(true);
    // クリップボードにコピー
    navigator.clipboard.writeText(text);

    // 2秒後に元に戻す
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-white">{label}</label>
      <div className="relative">
        <input
          type="text"
          className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-gray-400"
          value={text}
          disabled
        />
        <button
          className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-400 bg-gray-700 hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center border-gray-600 border"
          onClick={onClickCopy}
        >
          <span className="inline-flex items-center">
            {showSuccess ? (
              <>
                <Success />
                <span className="text-xs font-semibold ms-1.5">コピーしました</span>
              </>
            ) : (
              <>
                <Clipboard />
                <span className="text-xs font-semibold ms-1.5">コピー</span>
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CopyTextField;
