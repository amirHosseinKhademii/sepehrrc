import { Brand } from 'components';
import { useDesign, useUi, useDirection, useClass } from 'hooks';
import { GeneralLayout, ContainerTitle } from 'components';
import CustomerBrandSlider from '../../../components/store-front/slider/CustomerBrandSlider';
import { SwiperSlide } from 'swiper/react';

const BrandContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { marginRtl } = useDirection();
  const { join } = useClass();

  const { settings } = item;
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;

  const handleChild = () => {
    const arr = [];
    const arrAlt = Array.from({ length: 6 });
    const imgAlt = '/assets/images/themeImg2.png';
    if (item.images.length > 0) {
      item.images.map((item, index) => {
        arr.push(
          <SwiperSlide
            className="swiper-slide bg-white "
            key={index}
            style={{ height: '100px' }}
          >
            <img src={item.value} />
          </SwiperSlide>
        );
      });
    } else {
      arrAlt.map((item, index) => {
        arr.push(
          <SwiperSlide
            className="swiper-slide  flex flex-row-reverse items-center justify-center h-105px p-24px bg-white"
            key={index}
          >
            <img src={imgAlt} />
          </SwiperSlide>
        );
      });
    }

    return arr;
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'brands' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
      item={item}
      layout={layout}
    >
      <div className={`  items-center mx-auto`}>
        <ContainerTitle
          item={item}
          layout={layout}
          designState={designState}
          join={join}
        />
        <CustomerBrandSlider
          layout={layout}
          designState={designState}
          item={item}
          col={4}
        >
          {handleChild()}
        </CustomerBrandSlider>
      </div>
    </GeneralLayout>
  );
};

export default BrandContainer;
