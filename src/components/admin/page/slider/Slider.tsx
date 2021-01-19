import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper';
import { BorderShadow } from 'components';
import { useClass, useDesign, useUi } from 'hooks';

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

export const Slider = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();

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
    <BorderShadow
      active={
        uiState.drawer.style &&
        designState.current.type == 'slider' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
    >
      <div className="container mx-auto py-10">
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
    </BorderShadow>
  );
};
