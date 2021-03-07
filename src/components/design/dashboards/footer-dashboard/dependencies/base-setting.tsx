import { Input, Switch } from 'components';
import { ButtonDrawer, ResponsiveSwitchs } from '../../common';
import dynamic from 'next/dynamic';

const DashboardFirst = dynamic(
  () => import('./style-dashboard-footer/dashboard-first')
);
const DashboardSecond = dynamic(
  () => import('./style-dashboard-footer/dashboard-second')
);
const DashboardThird = dynamic(
  () => import('./style-dashboard-footer/dashboard-third')
);
const DashboardFourth = dynamic(
  () => import('./style-dashboard-footer/dashboard-fourth')
);

const BaseSettings = ({ setSetting, settings }) => {
  const HandleDashboardStyle = () => {
    switch (settings.style) {
      case 'second':
        return <DashboardSecond setSetting={setSetting} settings={settings} />;
      case 'third':
        return <DashboardThird setSetting={setSetting} settings={settings} />;
      case 'fourth':
        return <DashboardFourth setSetting={setSetting} settings={settings} />;
      default:
        return <DashboardFirst setSetting={setSetting} settings={settings} />;
        break;
    }
  };
  return <HandleDashboardStyle />;
};
export default BaseSettings;
