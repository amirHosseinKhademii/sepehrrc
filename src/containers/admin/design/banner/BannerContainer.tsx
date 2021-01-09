import {
  BannerFifth,
  BannerFirst,
  BannerSecond,
  BannerForth,
  BannerSixth,
  BannerThird,
} from 'components';

export const BannerContainer = ({ item }) => {
  const Banners = () => {
    if (
      !item.settings ||
      !item.settings.style ||
      item.settings.style === 'first'
    )
      return <BannerFirst item={item} />;
    else if (item.settings.style === 'second')
      return <BannerSecond item={item} />;
    else if (item.settings.style === 'third')
      return <BannerThird item={item} />;
    else if (item.settings.style === 'forth')
      return <BannerForth item={item} />;
    else if (item.settings.style === 'fifth')
      return <BannerFifth item={item} />;
    else if (item.settings.style === 'sixth')
      return <BannerSixth item={item} />;
  };
  return (
    <div className="">
      <Banners />
    </div>
  );
};
