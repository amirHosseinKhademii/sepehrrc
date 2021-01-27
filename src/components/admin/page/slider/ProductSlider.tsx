import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard, ProductTitle } from 'components';
import { useDesign } from 'hooks';
interface IProductSlider {
  item: any;
  data: any;
  title: string;
}

export const ProductSlider: FC<IProductSlider> = ({ item, title, data }) => {
  const handleChild = () => {
    let arr = [];
    arr = data.map((item, index) => {
      return (
        <SwiperSlide className="swiper-slide" key={index}>
          <ProductCard item={item} />
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div
      className="    w-full   my-25px "
      style={{
        backgroundColor: `${
          item?.settings && item.settings?.backgroundColor
            ? item.settings.backgroundColor
            : '#fff'
        }`,
        backgroundImage: `url(${
          item?.backgroundImage ? item.backgroundImage : 'unset'
        })`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="relative container mx-auto px-20px py-25px flex flex-col w-full">
        <div
          className={`swiper-paginations  absolute bottom-0  inset-x-0 mx-auto flex justify-center items-center h-2 focus:outline-none'
        `}
        ></div>

        <ProductTitle text={title} />
        <Swiper
          slidesPerView={4}
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
          className={`h-full w-full rounded  relative swiper-pagination-hidden py-20px`}
        >
          {handleChild()}
        </Swiper>
        <div className={`swiper-button-next`}></div>
        <div className={`swiper-button-prev`}></div>
      </div>
    </div>
  );
};
