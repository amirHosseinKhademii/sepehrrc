import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  EffectCube,
  EffectFlip,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectFlip,
]);

export const Brand = ({ child }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={100}
      //   effect="slide"
      grabCursor
      speed={2500}
      // autoplay={{ delay: 200, disableOnInteraction: false }}
      className={`h-450px w-full rounded`}
    >
      {child}
    </Swiper>
  );
};
