import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Sliderx from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    name: 'slider3',
    url: img3,
  },
];

export const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-45px">
      <AutoplaySlider
        className="h-450px rounded-lg"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        {data.map((item, index) => (
          <div className="rounded-xl" data-src={item.url} />
        ))}
      </AutoplaySlider>
      {/* REACT SLICK */}
      {/* <Sliderx {...settings}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Sliderx> */}
    </div>
  );
};
