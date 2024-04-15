import { getDateString } from '../../lib/utils';

type Props = {
  title: string;
  lastPlay: number;
  playTime: number;
};

const GameInfo = ({ title, lastPlay, playTime }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-full text-[12px] text-[#cad5df] leading-[14px]">
      <div>
        <span>{title}</span>
      </div>
      <div>
        <br></br>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-[#536b89]">
          {lastPlay == 0 ? '' : getDateString(lastPlay)}
        </span>
        <span>{Math.ceil((playTime / 60) * 10) / 10 + ' hours'}</span>
      </div>
    </div>
  );
};

export default GameInfo;
