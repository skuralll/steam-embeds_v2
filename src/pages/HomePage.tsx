import WhatIsThis from '../features/home/ WhatIsThis';
import HomeHeader from '../features/home/HomeHeader';
import WidgetGenerator from '../features/home/WidgetGenerator';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#1e2837]">
      <HomeHeader />
      <div className="flex flex-col items-center">
        <div className="max-w-3xl bg-[rgb(26,35,48)] px-3 py-2 w-full flex flex-col gap-[15px]">
          <WhatIsThis />
          <WidgetGenerator />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
