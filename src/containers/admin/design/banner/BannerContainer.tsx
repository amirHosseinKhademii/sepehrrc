import {
  BannerFifth,
  BannerFirst,
  BannerSecond,
  BannerForth,
  BannerSixth,
  BannerThird,
} from 'components';
import { useDesign, useUi } from 'hooks';

export const BannerContainer = ({ item }) => {
  const { uiState, toggleStyleDrawer } = useUi();
  const {
    designState,
    setChildPayload,
    onVerticalDrop,
    onDeleteItem,
  } = useDesign();

  const Banners = () => {
    if (
      !item.settings ||
      !item.settings.style ||
      item.settings.style === 'first'
    )
      return (
        <BannerFirst
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
    else if (item.settings.style === 'second')
      return (
        <BannerSecond
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
    else if (item.settings.style === 'third')
      return (
        <BannerThird
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
    else if (item.settings.style === 'forth')
      return (
        <BannerForth
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
    else if (item.settings.style === 'fifth')
      return (
        <BannerFifth
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
    else if (item.settings.style === 'sixth')
      return (
        <BannerSixth
          item={item}
          onClick={() => toggleStyleDrawer({ open: true, current: item })}
        />
      );
  };
  return (
    <div className="py-25px">
      <Banners />
    </div>
  );
};
