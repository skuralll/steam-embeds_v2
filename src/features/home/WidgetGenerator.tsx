import { useState } from 'react';
import BoxContents from '../../components/BoxContents';
import BoxHeader from '../../components/BoxHeader';
import InputField from '../../components/InputField';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import ShowWidgetModal from './widget_generator/ShowWidgetModal';
import { useForm } from 'react-hook-form';

type Form = {};

const WidgetGenerator = () => {
  const [steamId, setSteamId] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [num, setNum] = useState(8);

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmitGenerate = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <BoxHeader title={'埋め込みコード生成'} />
      <BoxContents>
        <form onSubmit={handleSubmit(onSubmitGenerate)}>
          <div className="w-full flex flex-col gap-2">
            <InputField
              label="SteamID"
              placeholder="76561198424303465"
              value={steamId}
              setValue={setSteamId}
            />
            <div className="flex gap-2">
              <div className="grow">
                <InputField label="横幅 (px)" placeholder="350" value={width} setValue={setWidth} />
              </div>
              <div className="grow">
                <InputField
                  label="縦幅 (px)"
                  placeholder="500"
                  value={height}
                  setValue={setHeight}
                />
              </div>
            </div>
            <div className="flex justify-start">
              <NumberInput label="表示するゲーム数" placeholder="8" value={num} setValue={setNum} />
              <div className="grow" />
            </div>
            <Button>コード生成</Button>
          </div>
        </form>
      </BoxContents>
      <ShowWidgetModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        params={{
          steamId,
          width: parseInt(width),
          height: parseInt(height),
          num,
        }}
      />
    </div>
  );
};

export default WidgetGenerator;
