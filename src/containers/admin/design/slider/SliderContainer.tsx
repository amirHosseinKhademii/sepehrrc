import { useEffect } from 'react';
import { BorderShadow } from 'components';
import { useDesign, useUi } from 'hooks';
import { SwiperSlide } from 'swiper/react';
import { Slider, Display } from 'components';
import Link from 'next/link';

export const SliderContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { settings } = item;

  useEffect(() => {}, [settings]);

  const handleScreen = () => {
    switch (settings.screen) {
      case 'full':
        return 'w-full';
      case 'simple':
        return 'container mx-auto';
      default:
        return 'container mx-auto';
    }
  };

  const handleChild = () => {
    const arr = [];
    item.images.map((item, index) => {
      arr.push(
        <SwiperSlide className="w-full originalSlider" key={index}>
          <Link href={item.link ? item.link : '#'}>
            <a target={item.newTab ? '_blank' : ''}>
              <img
                src={item.value}
                className={`h-full w-full`}
                alt={item.title}
                about={item.description}
              />
            </a>
          </Link>
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
  // const handleEffect = () => {
  //   switch (settings.effect) {
  //     case 'fade':
  //       return 'fade';
  //     case 'simple':
  //       return 'slide';
  //     default:
  //       return 'fade';
  //   }
  // };

  return (
    <Display mobile={settings?.mobile} desktop={settings?.monitor}>
      <BorderShadow
        active={
          uiState.drawer.style &&
          designState.current.type == 'slider' &&
          item.uuid == designState.current.uuid
            ? true
            : false
        }
        backgroundUrl={item.backgroundImage}
      >
        <div
          className={`${
            settings.screen ? handleScreen() : 'container mx-auto'
          } py-25px `}
        >
          {settings?.effect === 'simple' ? (
            <Slider
              child={handleChild()}
              speed={settings.speed ? handleSpeed() : 2500}
              screen={settings?.screen}
              button={settings?.button}
              effect="slide"
            />
          ) : (
            <div className="w-full">
              <Slider
                child={handleChild()}
                speed={handleSpeed()}
                screen={settings?.screen}
                button={settings?.button}
                effect="fade"
              />
            </div>
          )}
        </div>
      </BorderShadow>
    </Display>
  );
};
