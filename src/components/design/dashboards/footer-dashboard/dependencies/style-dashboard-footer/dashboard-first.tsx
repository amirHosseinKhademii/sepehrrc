import { ResponsiveSwitchs } from '../../../common';
import {
  StyleBoxFooter,
  TelInput,
  SocialGroup,
  DarkSelect,
} from '../../dependencies';

const DashboardFirst = ({ setSetting, settings }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxFooter />
      <TelInput settings={settings} setSetting={setSetting} />
      <SocialGroup setSetting={setSetting} settings={settings} />
      <DarkSelect setSetting={setSetting} settings={settings} />
      <ResponsiveSwitchs className="mt-0px" />
    </div>
  );
};
export default DashboardFirst;
