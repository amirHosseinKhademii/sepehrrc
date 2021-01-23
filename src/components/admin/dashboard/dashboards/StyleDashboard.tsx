import { useDesign } from 'hooks';
import { BannerDashboard } from './banner-dashboard';
import { HeaderDashboard } from './header-dashboard';
import { SliderDashboard } from './slider-dashboard';
import { BrandDashboard } from './brand-dashboard';
import { ProductDashboard } from './product-dashboard';

export const StyleDashboard = () => {
  const { designState } = useDesign();
  switch (designState.current.type) {
    case 'header':
      return <HeaderDashboard />;
    case 'banner':
      return <BannerDashboard />;
    case 'slider':
      return <SliderDashboard />;
    case 'products':
      return <ProductDashboard />;
    case 'brands':
      return <BrandDashboard />;
    default:
      return null;
  }
};
