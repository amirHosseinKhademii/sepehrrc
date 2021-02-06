import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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

  const handleChild = () => {
    let arr = [];
    let totalItems = item.settings?.total ? item.settings.total : Infinity;

    arr = data.slice(0, totalItems).map((item, index) => {
      return (
        <SwiperSlide className="swiper-slide" key={index}>
          <ProductCard item={item} />
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div className="relative container mx-auto px-20px py-25px flex flex-col w-full">
      <ProductTitle
        text={title}
        designState={designState}
        layout={true}
        join={join}
      />
      <Swiper
        slidesPerView={item.settings?.cols ? item.settings.cols : 4}
        effect="slide"
        spaceBetween={30}
        speed={2000}
        pagination={{
          el: '.swiper-paginations',
          type: 'bullets',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 200, disableOnInteraction: false }}
        className={`h-full w-full rounded  relative swiper-pagination-hidden pb-35px`}
      >
        {handleChild()}
        <div className={`swiper-button-next mr-2`}></div>
        <div className={`swiper-button-prev  ml-2`}></div>
        <div
          className={`swiper-paginations  absolute bottom-0 inset-x-0 mx-auto flex justify-center items-center h-2 focus:outline-none'
        `}
          style={{ bottom: 0 }}
        ></div>
      </Swiper>
    </div>
  );
};
