import { useEffect } from 'react';
import { GeneralLayout } from 'components';
import { useDesign, useUi } from 'hooks';
import { SwiperSlide } from 'swiper/react';
import { Slider } from 'components';
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
    const handleDragStart = (e) => e.preventDefault();
    item.images.length > 0
      ? item.images.map((item, index) => {
          arr.push(
            <Link href={item.link ? item.link : '#'} key={index}>
              <a target={item.newTab ? '_blank' : ''}>
                <img
                  src={item.value}
                  className={`h-450px w-full rounded`}
                  alt={item.title}
                  about={item.description}
                  onDragStart={handleDragStart}
                />
              </a>
            </Link>
          );
        })
      : arr.push(
          <div className="h-450px bg-gray_shade-200 flex justify-center items-center rounded">
            <span className="text-2xl text-gray-700 mt-4">اسلایدر</span>
          </div>
        );
    return arr;
  };

  const handleSpeed = () => {
    switch (settings.speed) {
      case 'fast':
        return 3000;
      case 'slow':
        return 7000;
      case 'normal':
        return 5000;
      default:
        return 5000;
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
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'slider' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
      item={item}
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
              effect="fadeout"
            />
          </div>
        )}
      </div>
    </GeneralLayout>
  );
};
