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
    <div className="py-25px">
      <Banners />
    </div>
  );
};
