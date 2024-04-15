type Props = {
  title: string;
  lastPlay: string;
  playTime: number;
};

const GameInfo = ({ title, lastPlay, playTime }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-full text-[12px] text-[#cad5df]">
      <span>{title}</span>
      <br></br>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-[#536b89]">{lastPlay}</span>
        <span>{Math.ceil((playTime / 60) * 10) / 10 + ' hours'}</span>
      </div>
    </div>
  );
};

export default GameInfo;
