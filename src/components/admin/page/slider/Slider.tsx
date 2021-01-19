import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

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
  const handelChild = () => {
    const arr = [];
    data.map((item, index) => {
      arr.push(
        <SwiperSlide className="swiper-slide" key={index}>
          <img src={item.url} className="h-full w-full" />
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div className="container mx-auto mt-45px">
      <Swiper
        effect="fade"
        spaceBetween={30}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="h-450px rounded"
      >
        {handelChild()}
      </Swiper>
    </div>
  );
};
