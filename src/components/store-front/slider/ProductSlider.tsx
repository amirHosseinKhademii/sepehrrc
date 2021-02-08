import { FC, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { ProductCard, ProductTitle } from 'components';
import { useDesign, useClass } from 'hooks';
interface IProductSlider {
  item: any;
  data: any;
  title: string;
}

export const ProductSlider: FC<IProductSlider> = ({ item, title, data }) => {
  const { designState } = useDesign();
  const { join } = useClass();
  const [state, setState] = useState(null);

  const handleChild = () => {
    let arr = [];
    let totalItems = item.settings?.total ? item.settings.total : Infinity;

    arr = data.slice(0, totalItems).map((item, index) => {
      return (
        <div className=" md:mr-30px" key={index}>
          <ProductCard item={item} />
        </div>
      );
    });
    return arr;
  };

  return (
    <div className=" container mx-auto px-20px py-25px flex flex-col w-full">
      <ProductTitle
        text={title}
        designState={designState}
        layout={true}
        join={join}
      />
      <AliceCarousel
        items={handleChild()}
        autoPlayInterval={2000}
        autoPlayStrategy="default"
        controlsStrategy="responsive"
        animationDuration={2000}
        disableButtonsControls
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: {
            items:
              item?.settings && item.settings?.cols ? item.settings.cols : 4,
          },
        }}
        autoPlay
        infinite
        paddingRight={30}
      />
    </div>
  );
};
