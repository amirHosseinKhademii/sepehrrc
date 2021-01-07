import {
  BannerFifth,
  BannerFirst,
  BannerSecond,
  BannerForth,
  BannerSixth,
  BannerThird,
} from 'components';

export const BannerContainer = ({ item }) => {
  if (!item.settings || !item.settings.style || item.settings.style === 'first')
    return <BannerFirst />;
  else if (item.settings.style === 'second') return <BannerSecond />;
  else if (item.settings.style === 'third') return <BannerThird />;
  else if (item.settings.style === 'forth') return <BannerForth />;
  else if (item.settings.style === 'fifth') return <BannerFifth />;
  else if (item.settings.style === 'sixth') return <BannerSixth />;
};
