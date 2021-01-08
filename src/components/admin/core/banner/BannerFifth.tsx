import { BannerImage } from './BannerImage';
import { BannerLayout } from './BannerLayout';

export const BannerFifth = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="2" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="2" item={item} />
      </div>
    </BannerLayout>
  );
};
