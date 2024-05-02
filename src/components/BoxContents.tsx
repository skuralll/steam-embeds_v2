import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BoxContents = ({ children }: Props) => {
  return <div className="bg-white p-[15px] w-full text-[14px] leading-6">{children}</div>;
};

export default BoxContents;
