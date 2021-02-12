import { Brand } from 'components';
import { useDesign, useUi } from 'hooks';
import { GeneralLayout } from 'components';

const BrandContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { settings } = item;

  const handleChild = () => {
    const arr = [];
    item.images.map((item, index) => {
      arr.push(
        <div
          key={index}
          className="flex justify-center items-center bg-white h-107px rounded-lg mr-30px"
        >
          <img src={item.value} className={`h-54px w-121px `} />
        </div>
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
        className={` flex justify-center items-center mx-auto`}
      >
        {/* <Brand child={handleChild()} /> */}
        <div className="flex justify-center items-center text-gray_shade-700 text-2xl">
          برند
        </div>
      </div>
    </GeneralLayout>
  );
};

export default BrandContainer;
