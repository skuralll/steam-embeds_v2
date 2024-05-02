type Props = {
  title: string;
};

const BoxHeader = ({ title }: Props) => {
  return (
    <h1 className="bg-gradient-to-r from-[#283541] to-[#53606D] text-white text-[22px] tracking-wide p-[15px] w-full">
      {title}
    </h1>
  );
};

export default BoxHeader;
