import AppLogo from '../../components/AppLogo';

const HomeHeader = () => {
  return (
    <nav className="bg-[#181d24] shadow">
      <div className="w-full mx-auto max-w-4xl h-12 flex items-center justify-between">
        <AppLogo />
      </div>
    </nav>
  );
};

export default HomeHeader;
