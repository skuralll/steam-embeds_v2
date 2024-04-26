import AppLogo from '../../components/AppLogo';

const HomeHeader = () => {
  return (
    <nav className="bg-[#181d24] shadow">
      <div className="h-20 flex flex-wrap items-center justify-between p-4">
        <AppLogo />
      </div>
    </nav>
  );
};

export default HomeHeader;
