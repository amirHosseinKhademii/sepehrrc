import { Brand } from 'components';
import { SwiperSlide } from 'swiper/react';
import { useDesign, useUi } from 'hooks';
import { GeneralLayout } from 'components';

export const BrandContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { settings } = item;

  const handleChild = () => {
    const arr = [];
    item.images.map((item, index) => {
      arr.push(
        <SwiperSlide
          key={index}
          className="flex justify-center items-center bg-white h-107px rounded-lg"
        >
          <img src={item.value} className={`h-54px w-121px `} />
        </SwiperSlide>
      );
    });
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
    >
      <div
        style={{ width: '1326px' }}
        className={`h-224px flex justify-center items-center mx-auto my-25px`}
      >
        <Brand child={handleChild()} slidesPerView={settings?.col} />
      </div>
    </GeneralLayout>
  );
};
