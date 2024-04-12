type Props = {
  src: string;
};

const GameImage = ({ src }: Props) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt="Banner" className="" />
    </div>
  );
};

export default GameImage;
