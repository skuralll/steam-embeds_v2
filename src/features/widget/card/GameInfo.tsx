type Props = {
  title: string;
  supplement: string;
  playTime: number;
};

const TITLE_LENGTH_LIMIT = 32;
const SUPPLEMENT_LENGTH_LIMIT = 20;

const GameInfo = ({ title, supplement, playTime }: Props) => {
  // limit title length
  if (title.length > TITLE_LENGTH_LIMIT) {
    title = title.slice(0, TITLE_LENGTH_LIMIT) + '...';
  }
  // limit supplement length
  if (supplement.length > SUPPLEMENT_LENGTH_LIMIT) {
    supplement = supplement.slice(0, SUPPLEMENT_LENGTH_LIMIT) + '...';
  }

  return (
    <div className="flex flex-col justify-between w-full h-full text-[12px] text-[#cad5df] leading-[14px]">
      <div>
        <span className="whitespace-nowrap">{title}</span>
      </div>
      <div>
        <br></br>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-[#536b89]">{supplement}</span>
        <span>{Math.ceil((playTime / 60) * 10) / 10 + ' hours'}</span>
      </div>
    </div>
  );
};

export default GameInfo;
