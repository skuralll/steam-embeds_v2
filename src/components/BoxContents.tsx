import { ReactNode } from 'react';

type Props = {
  isRounded?: boolean;
  children: ReactNode;
};

const BoxContents = ({ isRounded, children }: Props) => {
  return (
    <div
      className={`bg-white p-[15px] w-full text-[14px] leading-6 ${isRounded ? 'rounded-b' : ''}`}
    >
      {children}
    </div>
  );
};

export default BoxContents;
