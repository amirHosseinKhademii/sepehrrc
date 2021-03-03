import { Input, Switch } from 'components';
import { ButtonDrawer, ResponsiveSwitchs } from '../../common';
import {
  DashboardFirst,
  DashboardSecond,
  DashboardThird,
  DashboardFourth,
} from './style-dashboard-footer';

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
