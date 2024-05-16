import { PlayerSummary } from '../../types/Player';
import logo from '../../assets/steamlogo.svg';

type Props = {
  title: string;
  player?: PlayerSummary;
};

const WidgetHeader = ({ title, player }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!player) event.preventDefault();
  };

  const steamid = player ? player.steamid : '';

  return (
    <a
      href={`https://steamcommunity.com/profiles/${steamid}/`}
      target="_blank"
      onClick={handleClick}
    >
      <div className="w-full flex items-center gap-[1rem] bg-[#2d333f] p-[0.5rem]">
        <div>
          <img src={logo} width={100} height={30} alt="logo" />
        </div>
        <div>
          <span className="text-[#ffffff] text-[16px]">{title}</span>
        </div>
      </div>
    </a>
  );
};

export default WidgetHeader;
