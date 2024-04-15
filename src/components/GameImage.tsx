type Props = {
  src: string;
};

const GameImage = ({ src }: Props) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt="Banner" width={120} height={45.2} />
    </div>
  );
};

export default GameImage;
