import { Brand } from 'components';
import { useDesign, useUi, useDirection, useClass } from 'hooks';
import { GeneralLayout, ContainerTitle, GeneralLink } from 'components';
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
    const imgAlt = '/assets/images/defaultAlt.png';
    if (item.images.length > 0) {
      item.images.map((item, index) => {
        arr.push(
          <SwiperSlide
            className="swiper-slide bg-white h-105px "
            key={index}
            style={{ height: '100px', width: '196px' }}
          >
            <GeneralLink
              href={item?.link ? item.link : '/'}
              target={item?.newTab ? '_target' : '_self'}
              cssClass="sep-customer-brand__link"
            >
              <img
                src={item.value}
                style={{ height: '100px', width: '100%' }}
                className="object-contain"
                alt={'logoImg'}
              />
            </GeneralLink>
          </SwiperSlide>
        );
      });
    } else {
      arrAlt.map((item, index) => {
        arr.push(
          <SwiperSlide
            className="swiper-slide  flex flex-row-reverse items-center justify-center p-24px bg-white"
            style={{ height: '100px', width: '196px' }}
            key={index}
          >
            <img src={imgAlt} className="object-cover" />
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
          col={6}
        >
          {handleChild()}
        </CustomerBrandSlider>
      </div>
    </GeneralLayout>
  );
};

export default BrandContainer;
