import { useState } from 'react';
import BoxContents from '../../components/BoxContents';
import BoxHeader from '../../components/BoxHeader';
import InputField from '../../components/InputField';
import NumberInput from '../../components/NumberInput';
import ShowWidgetModal from './widget_generator/ShowWidgetModal';
import { useForm } from 'react-hook-form';
import { existsPlayer } from '@/lib/steam';
import LoadingButton from '@/components/LoadingButton';

type Form = {
  steamId: string;
  width: string;
  height: string;
};

const WidgetGenerator = () => {
  const [num, setNum] = useState(8);
  const [params, setParams] = useState<Form>({
    steamId: '',
    width: '',
    height: '',
  });
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { isDirty, errors },
  } = useForm<Form>({
    defaultValues: {
      width: '350',
      height: '470',
    },
  });

  const onSubmitValid = async (data: Form) => {
    setLoading(true);
    if (await existsPlayer(data.steamId)) {
      // ユーザーが存在する
      setParams(data);
      setModalOpen(true);
    } else {
      // ユーザーが存在しない
      setError('steamId', { type: 'manual', message: 'ユーザーが存在しません' });
    }
    setLoading(false);
  };

  const onSubmitInvalid = () => {
    // todo エラー表示
  };

  return (
    <div>
      <BoxHeader title={'埋め込みコード生成'} />
      <BoxContents>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <div className="w-full flex flex-col gap-2">
            <InputField
              label="SteamID"
              placeholder="76561198424303465"
              type="text"
              error={errors.steamId?.message}
              validation={register('steamId', { required: 'SteamIDを入力してください' })}
            />
            <div className="flex gap-2">
              <div className="grow">
                <InputField
                  label="横幅 (px)"
                  placeholder="350"
                  error={errors.width?.message}
                  validation={register('width', { required: '横幅を入力して下さい' })}
                />
              </div>
              <div className="grow">
                <InputField
                  label="縦幅 (px)"
                  placeholder="500"
                  error={errors.height?.message}
                  validation={register('height', { required: '縦幅を入力して下さい' })}
                />
              </div>
            </div>
            <div className="flex justify-start">
              <NumberInput label="表示するゲーム数" placeholder="8" value={num} setValue={setNum} />
              <div className="grow" />
            </div>
            <LoadingButton disabled={!isDirty} type="submit" isLoading={loading}>
              {loading ? '生成中' : 'コード生成'}
            </LoadingButton>
          </div>
        </form>
      </BoxContents>
      <ShowWidgetModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        params={{
          steamId: params.steamId,
          width: parseInt(params.width),
          height: parseInt(params.height),
          num,
        }}
      />
    </div>
  );
};

export default WidgetGenerator;
