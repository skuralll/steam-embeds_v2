import logo from '../assets/embedslogo.svg';

const AppLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} width={32} height={32} alt="logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-[#c5c3c0]">
        SteamEmbeds
      </span>
    </div>
  );
};

export default AppLogo;
