import { Fragment, useRef, useState } from 'react';
import { useDirection } from 'hooks';
import { ICAngelLeft, ICAngelRight } from 'icons';
import AliceCarousel from 'react-alice-carousel';
import '../../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

const ImageSlider = ({ child, speed, screen, button, effect, layout }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { rightTL, leftTR } = useDirection();

  const clickDots = (e, i) => {
    e.stopPropagation();
    if (sliderRef.current.state.activeIndex == i) return;
    sliderRef.current.slideTo(i);
  };
  const clickNext = (e) => {
    e.stopPropagation();
    sliderRef.current.slideNext();
  };
  const clickPrev = (e) => {
    e.stopPropagation();
    sliderRef.current.slidePrev();
  };

  const updateIndex = () => {
    setActiveIndex(sliderRef.current?.state.activeIndex);
  };

  const navItem = (item, index) => {
    return (
      <div
        key={index}
        className={` h-8px w-8px mx-1 rounded-full cursor-pointer
          ${activeIndex == index ? 'bg-primary-700' : 'bg-gray_shade-200'}
        `}
        onClick={(e) => clickDots(e, index)}
      />
    );
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <div
        className={`absolute top-0 ${leftTR}-0 h-450px text-white flex justify-center items-center cursor-pointer `}
        style={{ opacity: isDisabled ? '0.5' : 1 }}
        onClick={(e) => clickPrev(e)}
      >
        <ICAngelLeft fill="white" />
      </div>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <div
        className={`absolute top-0 ${rightTL}-0 h-450px text-white flex justify-center items-center cursor-pointer `}
        style={{ opacity: isDisabled ? '0.5' : 1 }}
        onClick={(e) => clickNext(e)}
      >
        <ICAngelRight fill="white" />
      </div>
    );
  };

  return (
    <Fragment>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={speed}
        animationDuration={500}
        animationType={effect}
        infinite
        touchTracking={false}
        mouseTracking={false}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={child}
        ref={sliderRef}
        disableDotsControls={true}
        onSlideChanged={() => updateIndex()}
        disableButtonsControls={button === 'first' ? true : false}
      />
      <div className="flex justify-center items-center pt-2">
        {child.map(navItem)}
      </div>
    </Fragment>
  );
};

export default ImageSlider;
