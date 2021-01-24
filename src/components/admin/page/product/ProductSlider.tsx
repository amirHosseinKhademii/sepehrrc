import { Children, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from 'components';
interface IProductSlider {
  items: any;
}
export const ProductSlider: FC<IProductSlider> = ({ items }) => {
  const handleChild = () => {
    let arr = [];
    arr = items.groups[0].groupItems.map((item, index) => {
      return (
        <SwiperSlide className="swiper-slide" key={index}>
          <Product item={item} />
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div className="container  relative mx-auto p-20px  flex flex-col">
      <div className="text-center text-4xl font-medium mt-16 mb-12 ">
        {items.title}
      </div>
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
        className={`h-full w-full rounded swiper-pagination-hidden p-20px`}
      >
        {handleChild()}
      </Swiper>
      <div className={`swiper-button-next`}></div>
      <div className={`swiper-button-prev`}></div>
      <div
        className={`swiper-paginations  absolute inset-x-0 mx-auto flex justify-center items-center h-4 focus:outline-none'
        `}
      ></div>
    </div>
  );
};
