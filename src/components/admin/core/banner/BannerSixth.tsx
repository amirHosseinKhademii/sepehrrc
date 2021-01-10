import { BannerImage, BannerLayout } from './dependencies';

export const BannerSixth = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="one" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="two" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="three" item={item} />
      </div>
    </BannerLayout>
  );
};
