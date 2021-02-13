import { FC } from 'react';
import { BannerImage, BannerLayout } from './dependencies';

const BannerFirst: FC<IBanner> = ({ item, layout }) => {
  return (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full ">
        <BannerImage
          className="h-211px"
          number="two"
          item={item}
          layout={layout}
        />
        <BannerImage
          className="h-211px"
          number="three"
          item={item}
          layout={layout}
        />
      </div>
      <div className="col-span-2 ">
        <BannerImage
          className="h-437px"
          number="one"
          item={item}
          layout={layout}
        />
      </div>
    </BannerLayout>
  );
};

export default BannerFirst;
