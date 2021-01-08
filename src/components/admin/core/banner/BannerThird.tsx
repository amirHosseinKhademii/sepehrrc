import { BannerImage } from './BannerImage';
import { BannerLayout } from './BannerLayout';

export const BannerThird = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="2" item={item} />
        <BannerImage className="h-211px" number="3" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="2" item={item} />
        <BannerImage className="h-211px" number="3" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="2" item={item} />
        <BannerImage className="h-211px" number="3" item={item} />
      </div>
    </BannerLayout>
  );
};
