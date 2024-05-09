import Modal from '@/components/Modal';
import CheckMark from './CheckMark';
import CopyTextField from '@/components/CopyTextField';
import { WidgetParams } from '@/types/Widget';
import { getEmbedsCode } from '@/lib/generator';
import CodePreview from './CodePreview';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  params: WidgetParams;
};

const ShowWidgetModal = ({ isOpen, setIsOpen, params }: Props) => {
  const code = getEmbedsCode(params);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-[15px] max-w-2xl">
        <div className="flex items-center gap-2">
          <h1 className="text-[22px]">埋め込みコード生成完了</h1>
          <div className="w-[22px] h-[22px]">
            <CheckMark />
          </div>
        </div>
        <span>
          埋め込みコードを生成しました。以下のコードをコピーして、あなたのサイトに貼り付けてください。サイズや表示内容を調整したい場合は、このモーダルを閉じて再度パラメータを設定してください。
        </span>
        <div className="flex items-center space-x-1">
          <div className="flex-1 border-b-[1px] border-[#4f535a]"></div>
        </div>
        <CopyTextField label="埋め込みコード :" text={code} />
        <CodePreview code={code} />
      </div>
    </Modal>
  );
};

export default ShowWidgetModal;
