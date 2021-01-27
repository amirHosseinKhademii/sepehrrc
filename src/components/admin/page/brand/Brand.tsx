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

export const Brand = ({ child, slidesPerView = 4 }) => {
  return (
    <Swiper
      grabCursor
      slidesPerView={slidesPerView}
      spaceBetween={30}
      speed={2500}
      autoplay={{ delay: 200, disableOnInteraction: false }}
      className={`h-107px w-full rounded`}
    >
      {child}
    </Swiper>
  );
};
