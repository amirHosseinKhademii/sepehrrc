import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard, ContainerTitle } from 'components';
import { useDesign, useClass } from 'hooks';
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

interface IProductSlider {
  item: any;
  data: any;
  title: string;
  col?: number;
}

export const ProductSlider: FC<IProductSlider> = ({
  item,
  title,
  data,
  col,
}) => {
  const { designState } = useDesign();
  const { join } = useClass();
  const [state, setState] = useState(null);

  const handleChild = () => {
    let arr = [];
    let totalItems = item.settings?.total ? item.settings.total : Infinity;

    arr = data.slice(0, totalItems).map((item, index) => {
      return (
        <SwiperSlide className="swiper-slide" key={index}>
          <ProductCard item={item} />
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div
      onMouseEnter={() => state.autoplay.stop()}
      onMouseLeave={() => state.autoplay.start()}
      className="relative container mx-auto px-20px pb-6  flex flex-col w-full"
    >
      <ContainerTitle
        text={title}
        designState={designState}
        layout={true}
        join={join}
      />
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
        {handleChild()}
      </Swiper>
      <div
        className={`swiper-paginations absolute bottom-0 inset-x-0 mx-auto flex justify-center items-center  focus:outline-none'
        `}
      ></div>
    </div>
  );
};
