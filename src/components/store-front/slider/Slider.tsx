import { useRef } from 'react';
import { ICAngelLeft, ICAngelRight } from 'icons';
import AliceCarousel from 'react-alice-carousel';

export const Slider = ({ child, speed, screen, button, effect }) => {
  const sliderRef = useRef(null);

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="flex h-8px w-8px mx-1 rounded-full bg-gray_shade-800 "></div>
    ) : (
      <div className="flex h-8px w-8px mx-1 rounded-full bg-gray_shade-600  cursor-pointer"></div>
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
      <div
        className="absolute top-0 right-0 h-450px text-white flex justify-center items-center cursor-pointer "
        style={{ opacity: isDisabled ? '0.5' : 1 }}
      >
        <ICAngelRight fill="white" />
      </div>
    );
  };
  return (
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
  );
};
