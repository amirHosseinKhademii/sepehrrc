import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerTitle } from 'components';
import { useClass } from 'hooks';
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
import 'swiper/swiper.min.css';
import '../../../../node_modules/swiper/components/navigation/navigation.min.css';
import '../../../../node_modules/swiper/components/pagination/pagination.min.css';
import '../../../../node_modules/swiper/components/scrollbar/scrollbar.min.css';
import '../../../../node_modules/swiper/components/effect-fade/effect-fade.min.css';
import '../../../../node_modules/swiper/components/effect-flip/effect-flip.min.css';
import '../../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.min.css';
import '../../../../node_modules/swiper/components/a11y/a11y.min.css';
import '../../../../node_modules/swiper/components/controller/controller.min.css';
import dynamic from 'next/dynamic';

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

interface ICustomerBrandSlider {
  children: any;
  item: any;

  col?: number;
  layout: boolean;
  designState: any;
}

const CustomerBrandSlider: FC<ICustomerBrandSlider> = ({
  item,
  col = 4,
  designState,
  layout,
  children,
}) => {
  const { join } = useClass();
  const [state, setState] = useState(null);

  return (
    <div
      onMouseEnter={() => state.autoplay.stop()}
      onMouseLeave={() => state.autoplay.start()}
      className="relative container mx-auto px-20px pb-6  flex flex-col w-full"
    >
      <Swiper
        key={col}
        slidesPerView={col}
        effect="slide"
        spaceBetween={30}
        speed={2000}
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
        onSwiper={(e) => setState(e)}
        className={`h-full w-full rounded z-0  `}
      >
        {children}
      </Swiper>
      <div
        className={`swiper-paginations absolute bottom-0 inset-x-0 mx-auto flex justify-center items-center  focus:outline-none'
        `}
      ></div>
    </div>
  );
};

export default CustomerBrandSlider;
