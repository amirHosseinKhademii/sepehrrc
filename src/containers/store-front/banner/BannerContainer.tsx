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
  const { join } = useClass();

  const Banners = () => {
    if (item.settings && item.settings.style)
      switch (item.settings.style) {
        case 'fisrt':
          return <BannerFirst item={item} />;
        case 'second':
          return <BannerSecond item={item} />;
        case 'third':
          return <BannerThird item={item} />;
        case 'forth':
          return <BannerForth item={item} />;
        case 'fifth':
          return <BannerFifth item={item} />;
        case 'sixth':
          return <BannerSixth item={item} />;
        default:
          return <BannerFirst item={item} />;
      }
    else return <BannerFirst item={item} />;
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
    >
      <ContainerTitle
        designState={designState}
        text={
          item?.settings && item.settings?.title
            ? item.settings.title
            : item.title
        }
        join={join}
      />
      <Banners />
    </GeneralLayout>
  );
};

export default BannerContainer;
