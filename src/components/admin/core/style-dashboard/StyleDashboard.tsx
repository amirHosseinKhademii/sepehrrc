import { useDesign } from 'hooks';
import { BannerDashboard } from './BannerDashboard';
import { HeaderDashboard } from './HeaderDashboard';

export const StyleDashboard = () => {
  const { designState } = useDesign();
  if (designState.current.type === 'header') return <HeaderDashboard />;
  else if (designState.current.type === 'banner') return <BannerDashboard />;
};
