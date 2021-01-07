import { BannerImage } from './BannerImage';
import { BannerLayout } from './BannerLayout';

export const BannerFifth = () => {
  return (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <BannerImage className="h-1/2" number="2" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <BannerImage className="h-1/2" number="2" />
      </div>
    </BannerLayout>
  );
};
