import logo from '../assets/embedslogo.svg';

const AppLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} width={36} height={36} alt="logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        SteamEmbeds
      </span>
    </div>
  );
};

export default AppLogo;
