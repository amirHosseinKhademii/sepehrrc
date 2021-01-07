import { useClass } from 'hooks';
import { BannerImage } from './BannerImage';
import { BannerLayout } from './BannerLayout';

export const BannerSecond = () => {
  const { join } = useClass();
  return (
    <BannerLayout className="grid-cols-4">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <BannerImage className="h-full" number="2" />
        <BannerImage className="h-full" number="3" />
      </div>
      <div className="col-span-2">
        <BannerImage className="h-full" number="1" />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <BannerImage className="h-full" number="2" />
        <BannerImage className="h-full" number="3" />
      </div>
    </BannerLayout>
  );
};
