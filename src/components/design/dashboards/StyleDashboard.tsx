import { useDesign } from 'hooks';
import dynamic from 'next/dynamic';

const HeaderDashboard = dynamic(
  () => import('components/design/dashboards/header-dashboard/Dashboard')
);
const BannerDashboard = dynamic(
  () => import('components/design/dashboards/banner-dashboard/Dashboard')
);
const SliderDashboard = dynamic(
  () => import('components/design/dashboards/slider-dashboard/Dashboard')
);
const ProductDashboard = dynamic(
  () => import('components/design/dashboards/product-dashboard/DashBoard')
);
const BrandDashboard = dynamic(
  () => import('components/design/dashboards/brand-dashboard/Dashboard')
);

const StyleDashboard = () => {
  const { designState } = useDesign();
  switch (designState.current.type) {
    case 'header':
      return <HeaderDashboard designState={designState} />;
    case 'banner':
      return <BannerDashboard designState={designState} />;
    case 'slider':
      return <SliderDashboard />;
    case 'products':
      return <ProductDashboard designState={designState} />;
    case 'brands':
      return <BrandDashboard />;
    default:
      return <HeaderDashboard designState={designState} />;
  }
};

export default StyleDashboard;
