import { Fragment } from 'react';
import { Swiper } from 'swiper/react';
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

export const Slider = ({ child, speed, button, effect }) => {
  return (
    <Fragment>
      <Swiper
        effect={effect}
        spaceBetween={30}
        speed={speed}
        pagination={{
          el: '.swiper-paginations',
          type: 'bullets',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-nexts',
          prevEl: '.swiper-button-prevs',
        }}
        autoplay={{ delay: 200, disableOnInteraction: false }}
        className={`h-450px w-full rounded swiper-pagination-hidden`}
      >
        {child}
      </Swiper>

      <div
        className={`swiper-button-nexts ${button === 'first' ? 'hidden' : ''}`}
      ></div>
      <div
        className={`swiper-button-prevs ${button === 'first' ? 'hidden' : ''}`}
      ></div>
      <div
        className={`swiper-paginations ${
          button === 'second'
            ? 'hidden'
            : 'absolute inset-x-0 mx-auto flex justify-center items-center h-4 focus:outline-none'
        }`}
      ></div>
    </Fragment>
  );
};
