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

export const Slider = ({ child, speed, screen, button, effect }) => {
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 200, disableOnInteraction: false }}
        className={`h-450px w-full rounded`}
      >
        {child}
        <div
          className={`swiper-button-next ${button === 'first' ? 'hidden' : ''}`}
        ></div>
        <div
          className={`swiper-button-prev ${button === 'first' ? 'hidden' : ''}`}
        ></div>
      </Swiper>
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
