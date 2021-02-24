import { ContainerTitle, GeneralLayout } from 'components';
import { useDesign, useUi, useClass } from 'hooks';
import dynamic from 'next/dynamic';

const ProductGroupCard = dynamic(
  () =>
    import('components/store-front/card/product-group-card/ProductGroupCard')
);

const data = [
  {
    id: 0,
    title: 'انواع پاور بانک',
    imgUrl: '/assets/images/product.png',
  },
  {
    id: 1,
    title: 'انواع دوربین',
    imgUrl: '/assets/images/product.png',
  },
  {
    id: 2,
    title: 'هدفون و هندزفری',
    imgUrl: '/assets/images/product.png',
  },
  {
    id: 3,
    title: 'انواع تبلت',
    imgUrl: '/assets/images/product.png',
  },
  {
    id: 3,
    title: 'لپ تاپ',
    imgUrl: '/assets/images/product.png',
  },
];

const ProductGroupContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { join } = useClass();
  const { settings } = item;
  const { current } = designState;
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;
  const { cols } = settings;

  const newData = data.slice(0, cols || 3);

  const handleChild = () => {
    return newData.map((i, index) => (
      <ProductGroupCard
        key={index}
        layout={layout}
        designState={designState}
        imgUrl={i.imgUrl}
        title={i.title}
      />
    ));
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        current.type == 'product-group' &&
        item.uuid == current.uuid
          ? true
          : false
      }
      className="my-25px"
      item={item}
      layout={layout}
    >
      <ContainerTitle
        designState={designState}
        item={item}
        join={join}
        layout={layout}
      />
      <div
        className={`container mx-auto  grid grid-cols-${
          cols || 3
        } gap-x-7 px-20px`}
      >
        {handleChild()}
      </div>
    </GeneralLayout>
  );
};
export default ProductGroupContainer;
