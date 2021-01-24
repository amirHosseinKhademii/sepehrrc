import { useEffect } from 'react';
import { BorderShadow } from 'components';
import { useDesign, useUi } from 'hooks';
import { SwiperSlide } from 'swiper/react';
import { Slider } from 'components';

export const SliderContainer = ({ item }) => {
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
          <Slider
            child={handleChild()}
            speed={handleSpeed}
            button={settings.button}
            effect="slide"
          />
        ) : (
          <div className="w-full">
            <Slider
              child={handleChild()}
              speed={handleSpeed}
              button={settings.button}
              effect="fade"
            />
          </div>
        )}
      </div>
    </BorderShadow>
  );
};
