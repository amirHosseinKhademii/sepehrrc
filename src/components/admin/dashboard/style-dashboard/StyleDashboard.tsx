import { useDesign } from 'hooks';
import { BannerDashboard } from './BannerDashboard';
import { HeaderDashboard } from './HeaderDashboard';
import { SliderDashboard } from './SliderDashboard';

export const StyleDashboard = () => {
  const { designState } = useDesign();
  if (designState.current.type === 'header') return <HeaderDashboard />;
  else if (designState.current.type === 'banner') return <BannerDashboard />;
  else if (designState.current.type === 'slider') return <SliderDashboard />;
  else return null;
};
