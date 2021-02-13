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
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? false : true;

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
    >
      <Banners />
    </GeneralLayout>
  );
};
