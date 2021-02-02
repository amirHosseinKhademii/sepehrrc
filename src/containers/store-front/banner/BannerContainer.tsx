import {
  BannerFifth,
  BannerFirst,
  BannerSecond,
  BannerForth,
  BannerSixth,
  BannerThird,
  GeneralLayout,
} from 'components';
import { useDesign, useUi } from 'hooks';

export const BannerContainer = ({ item }) => {
  const { uiState } = useUi();
  const { designState } = useDesign();
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
      <Banners />
    </GeneralLayout>
  );
};
