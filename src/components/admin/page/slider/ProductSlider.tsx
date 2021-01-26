import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard, ProductTitle } from 'components';
import { useDesign } from 'hooks';
interface IProductSlider {
  items: any;
  title: string;
}

export const ProductSlider: FC<IProductSlider> = ({ items, title }) => {
  const { designState } = useDesign();
  const { settings } = designState.current;
  const handleChild = () => {
    let arr = [];
    arr = items.map((item, index) => {
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
      className="container relative  mx-auto p-20px  flex flex-col"
      style={{
        backgroundColor: `${
          settings?.backgroundColor ? settings.backgroundColor : '#fff'
        }`,
      }}
    >
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
        className={`h-full w-full rounded  relative swiper-pagination-hidden p-20px`}
      >
        {handleChild()}
        <div className={`swiper-button-next`}></div>
        <div className={`swiper-button-prev`}></div>
      </Swiper>
    </div>
  );
};
