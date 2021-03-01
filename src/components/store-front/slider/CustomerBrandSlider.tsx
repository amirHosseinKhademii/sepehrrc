import { FC, useState } from 'react';
import { Swiper } from 'swiper/react';
import { useClass, useDirection } from 'hooks';
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
import { ICAngelRight, ICAngelLeft } from 'icons';
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
          el: '.paginations',
          type: 'bullets',
          clickable: true,
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        autoplay={{ delay: 200, disableOnInteraction: false }}
        onSwiper={(e) => setState(e)}
        className={`h-full w-full rounded z-0  `}
      >
        {children}
      </Swiper>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`paginations absolute bottom-0 inset-x-0 mx-auto flex justify-center items-center z-50 focus:outline-none'
        `}
      ></div>
      <div className="button-next absolute inset-x-0 inset-y-0 -right-25px flex justify-end items-center focus:outline-none">
        <ICAngelRight
          onClick={(e) => e.stopPropagation()}
          className="text-24px -mt-6 cursor-pointer z-50"
        />
      </div>
      <div className="button-next absolute inset-x-0 inset-y-0 -left-25px flex justify-start items-center focus:outline-none">
        <ICAngelLeft
          onClick={(e) => e.stopPropagation()}
          className="text-24px -mt-6 cursor-pointer z-50"
        />
      </div>
    </div>
  );
};

export default CustomerBrandSlider;
