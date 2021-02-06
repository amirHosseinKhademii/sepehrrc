import { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICAngelLeft, ICAngelRight } from 'icons';
import AliceCarousel from 'react-alice-carousel';
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
  const sliderRef = useRef(null);

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="flex h-8px w-8px mx-1 rounded-full bg-gray_shade-800 -m-6"></div>
    ) : (
      <div className="flex h-8px w-8px mx-1 rounded-full bg-gray_shade-600 -m-6 cursor-pointer"></div>
    );
  };
  const renderPrevButton = ({ isDisabled }) => {
    return (
      <div
        className="absolute top-0 left-0 h-450px text-white flex justify-center items-center cursor-pointer "
        style={{ opacity: isDisabled ? '0.5' : 1 }}
      >
        <ICAngelLeft fill="white" />
      </div>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <span
        className="absolute top-0 right-0 h-450px text-white flex justify-center items-center cursor-pointer "
        style={{ opacity: isDisabled ? '0.5' : 1 }}
      >
        <ICAngelRight fill="white" />
      </span>
    );
  };
  return (
    <div className="relative">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={speed}
        animationDuration={1000}
        animationType={effect}
        infinite
        touchTracking={false}
        mouseTracking={false}
        renderDotsItem={renderDotsItem}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={child}
        ref={sliderRef}
        disableDotsControls={button === 'second' ? true : false}
        disableButtonsControls={button === 'first' ? true : false}
      />
    </div>

    // <Swiper
    //   slidesPerView={1}
    //   effect={effect}
    //   speed={speed}
    //   loop
    //   pagination={{
    //     el: '.swiper-paginations',
    //     type: 'bullets',
    //     clickable: true,
    //   }}
    //   navigation={{
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }}
    //   autoplay={{ delay: 200 }}
    //   className={`h-450px w-full rounded`}
    // >
    //   {child.length > 0 ? (
    //     child
    //   ) : (
    //     <SwiperSlide className="bg-gray_shade-200 originalSlider flex justify-center items-center">
    //       <span className="text-2xl text-gray-700">اسلایدر</span>
    //     </SwiperSlide>
    //   )}
    //   <div
    //     className={`swiper-button-next ${button === 'first' ? 'hidden' : ''}`}
    //   ></div>
    //   <div
    //     className={`swiper-button-prev ${button === 'first' ? 'hidden' : ''}`}
    //   ></div>
    // </Swiper>
    // <div
    //   className={`swiper-paginations ${
    //     button === 'second'
    //       ? 'hidden'
    //       : 'absolute inset-x-0 mx-auto flex justify-center items-center h-4 focus:outline-none'
    //   }`}
    // ></div>
  );
};
