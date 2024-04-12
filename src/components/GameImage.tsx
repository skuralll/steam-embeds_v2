type Props = {
  src: string;
};

const GameImage = ({ src }: Props) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt="Banner" className="w-[120px] h-[45.2px]" />
    </div>
  );
};

export default GameImage;
