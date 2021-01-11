import { BannerImage, BannerLayout } from './dependencies';

export const BannerSecond = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-4">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="one" item={item} />
        <BannerImage className="h-211px" number="two" item={item} />
      </div>
      <div className="col-span-2">
        <BannerImage className="h-437px" number="three" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="four" item={item} />
        <BannerImage className="h-211px" number="five" item={item} />
      </div>
    </BannerLayout>
  );
};