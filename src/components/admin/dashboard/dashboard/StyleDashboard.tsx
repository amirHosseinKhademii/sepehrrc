import { useDesign } from 'hooks';
import { BannerDashboard } from './BannerDashboard';
import { HeaderDashboard } from './HeaderDashboard';
import { SliderDashboard } from './SliderDashboard';
import { CustomerDashboard } from '.';

export const StyleDashboard = () => {
  const { designState } = useDesign();
  switch (designState.current.type) {
    case 'header':
      return <HeaderDashboard />;
    case 'banner':
      return <BannerDashboard />;
    case 'slider':
      return <SliderDashboard />;
    default:
      return <CustomerDashboard />;
  }
};
