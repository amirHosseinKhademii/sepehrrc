import { Fragment, useContext, useState, useRef, useEffect, FC } from 'react';
import { UIContext } from 'providers/ui-provider';
import { ArrowLeft, ArrowRight } from 'icons';

const img1 = '/assets/images/slider1.jpg';
const img2 = '/assets/images/slider2.jpg';
const img3 = '/assets/images/slider3.jpg';

const data = [
  {
    id: '0',
    name: 'slider1',
    url: img1,
  },
  {
    id: '1',
    name: 'slider2',
    url: img2,
  },
  {
    id: '2',
    name: 'slider31',
    url: img3,
  },
  {
    id: '3',
    name: 'slider31',
    url: img2,
  },
];

interface ISlider {}

export const Slider: FC<ISlider> = () => {
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => {
      clearInterval(interval);
    };
  });

  const { uiState } = useContext(UIContext);
  const firstSlide = data[0];
  const secondSlide = data[1];
  const lastSlide = data[data.length - 1];
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    slidesToShow: [lastSlide, firstSlide, secondSlide],
  });
  const { activeSlide, translate, slidesToShow, transition } = state;

  const nextSlide = () => {
    if (activeSlide === data.length - 1) {
      return setState({ ...state, activeSlide: 0, translate: 0 });
    }
    setState({
      ...state,
      translate: 100 * (activeSlide + 1),
      activeSlide: activeSlide + 1,
    });
  };
  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        activeSlide: data.length - 1,
        translate: (data.length - 1) * 100,
      });
    }
    setState({
      ...state,
      translate: translate - 100,
      activeSlide: activeSlide - 1,
    });
  };

  return (
    <Fragment>
      <div
        className="w-4/5 my-3
      mx-auto relative overflow-hidden whitespace-nowrap"
      >
        <SliderContent translate={translate} width="100%">
          {data.map((item, index) => (
            <Slide key={index} item={item} />
          ))}
        </SliderContent>
        <Arrow direction="right" handleClick={() => nextSlide()} />
        <Arrow direction="left" handleClick={() => prevSlide()} />
      </div>
    </Fragment>
  );
};

///slider Parts

//SliderContent

const SliderContent = ({ children, translate, width }) => {
  return (
    <div className="content flex  transform  transition-all  duration-500">
      {children}
      <style jsx>
        {`
          .content {
            transform: translateX(-${translate}%);
            width: ${width};
          }
        `}
      </style>
    </div>
  );
};

//Slide
const Slide = ({ item }) => {
  return (
    <img
      src={item.url}
      alt={item.name}
      className=" w-full bg-cover bg-no-repeat bg-center"
      style={{ height: '500px' }}
    />
  );
};
//Arrow
const Arrow = ({ direction, handleClick }) => {
  if (direction === 'left') {
    return (
      <ArrowLeft
        onClick={handleClick}
        className="absolute left-10px top-2/4"
        fontSize="40px"
        fill="#fff"
      />
    );
  } else if (direction === 'right')
    return (
      <ArrowRight
        fill="#fff"
        className="absolute right-10px top-2/4"
        fontSize="40px"
        onClick={handleClick}
      />
    );
};
