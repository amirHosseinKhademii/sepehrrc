import { useEffect } from 'react';
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
import { BorderShadow } from 'components';
import { useDesign, useUi } from 'hooks';

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

export const Slider = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { settings } = designState.current;

  useEffect(() => {}, [settings.effect]);

  const handleChild = () => {
    const arr = [];
    item.images.map((item, index) => {
      arr.push(
        <SwiperSlide className="swiper-slide" key={index}>
          <img src={item.value} className="h-full w-full" />
        </SwiperSlide>
      );
    });
    return arr;
  };

  const handleSpeed = () => {
    switch (settings.speed) {
      case 'fast':
        return 250;
      case 'slow':
        return 3500;
      case 'normal':
        return 2500;
      default:
        return 2500;
    }
  };
  const handleEffect = () => {
    switch (settings.effect) {
      case 'fade':
        return 'fade';
      case 'simple':
        return 'slide';
      default:
        return 'fade';
    }
  };

  const handleScreen = () => {
    switch (settings.screen) {
      case 'full':
        return 'w-screen';
      case 'simple':
        return 'container mx-auto';
      default:
        return 'container mx-auto';
    }
  };

  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        designState.current.type == 'slider' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
    >
      <div className={`${handleScreen()} py-10`}>
        {settings.effect === 'simple' ? (
          <div className="w-full">
            <Swiper
              effect="slide"
              spaceBetween={30}
              speed={1000}
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
              className={`h-450px w-full rounded swiper-pagination-hidden`}
            >
              {handleChild()}
            </Swiper>
          </div>
        ) : (
          <div className="w-full">
            <Swiper
              effect="fade"
              spaceBetween={30}
              speed={handleSpeed()}
              pagination={{
                el: '.swiper-paginations',
                type: 'bullets',
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 200,
                disableOnInteraction: false,
              }}
              className={`h-450px w-full rounded swiper-pagination-hidden`}
            >
              {handleChild()}
            </Swiper>
          </div>
        )}

        <div
          className={`swiper-button-next ${
            settings && settings.button === 'first' ? 'hidden' : ''
          }`}
        ></div>
        <div
          className={`swiper-button-prev ${
            settings && settings.button === 'first' ? 'hidden' : ''
          }`}
        ></div>
        <div
          className={`swiper-paginations ${
            settings && settings.button === 'second'
              ? 'hidden'
              : 'absolute inset-x-0 mx-auto flex justify-center items-center h-4 focus:outline-none'
          }`}
        ></div>
      </div>
    </BorderShadow>
  );
};
