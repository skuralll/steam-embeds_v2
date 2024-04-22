import icon from '../assets/steamicon.svg';

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center bg-[#16202d]">
      <div className="absolute animate-spin rounded-full h-[136px] w-[136px] border-t-4 border-r-4  border-[#2F5F94]" />
      <div className="flex justify-center items-center rounded-full bg-white h-[116px] w-[116px]">
        <img src={icon} className="rounded-full h-[112px] w-[112px]" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
