import { GeneralLayout, ContainerTitle } from 'components';
import { useClass, useDesign, useUi } from 'hooks';
import dynamic from 'next/dynamic';

const BannerFirst = dynamic(
  () => import('components/store-front/banner/BannerFirst')
);
const BannerSecond = dynamic(
  () => import('components/store-front/banner/BannerSecond')
);
const BannerThird = dynamic(
  () => import('components/store-front/banner/BannerThird')
);
const BannerForth = dynamic(
  () => import('components/store-front/banner/BannerForth')
);
const BannerFifth = dynamic(
  () => import('components/store-front/banner/BannerFifth')
);
const BannerSixth = dynamic(
  () => import('components/store-front/banner/BannerSixth')
);

const BannerContainer = ({ item }) => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;
  const { join } = useClass();

  const Banners = () => {
    if (item.settings && item.settings.style)
      switch (item.settings.style) {
        case 'first':
          return <BannerFirst item={item} layout={layout} />;
        case 'second':
          return <BannerSecond item={item} layout={layout} />;
        case 'third':
          return <BannerThird item={item} layout={layout} />;
        case 'forth':
          return <BannerForth item={item} layout={layout} />;
        case 'fifth':
          return <BannerFifth item={item} layout={layout} />;
        case 'sixth':
          return <BannerSixth item={item} layout={layout} />;
        default:
          return <BannerFirst item={item} layout={layout} />;
      }
    else return <BannerFirst item={item} layout={layout} />;
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'banner' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
      item={item}
      layout={layout}
    >
      <ContainerTitle
        designState={designState}
        text={
          item?.settings && item.settings?.title
            ? item.settings.title
            : item.title
        }
        join={join}
        layout={layout}
      />
      <Banners />
    </GeneralLayout>
  );
};

export default BannerContainer;
