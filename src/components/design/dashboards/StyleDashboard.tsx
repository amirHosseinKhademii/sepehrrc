import { DrawerLayout } from 'components';
import { useDesign } from 'hooks';
import dynamic from 'next/dynamic';
const HeaderDashboard = dynamic(
  () => import('components/design/dashboards/header-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
);
const BannerDashboard = dynamic(
  () => import('components/design/dashboards/banner-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
);
const SliderDashboard = dynamic(
  () => import('components/design/dashboards/slider-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
);
const ProductDashboard = dynamic(
  () => import('components/design/dashboards/product-dashboard/DashBoard'),
  { loading: () => <DrawerLayout /> }
);
const BrandDashboard = dynamic(
  () => import('components/design/dashboards/brand-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
);
const FooterDashboard = dynamic(
  () => import('components/design/dashboards/footer-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
);
const BlogDashboard = dynamic(
  () => import('components/design/dashboards/blog-dashboard/Dashboard'),
  { loading: () => <DrawerLayout /> }
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
    case 'footer':
      return <FooterDashboard />;
    case 'blog':
      return <BlogDashboard />;
    default:
      return <HeaderDashboard designState={designState} />;
  }
};

export default StyleDashboard;
