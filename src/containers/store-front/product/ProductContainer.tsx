import { GeneralLayout, ProductGrid, ContainerTitle } from 'components';
import { useDesign, useUi, useClass } from 'hooks';
import dynamic from 'next/dynamic';
import { data } from './data';

const Pagination = dynamic(
  () => import('components/store-front/pagination/Pagination')
);
const ProductSlider = dynamic(
  () => import('components/store-front/slider/ProductSlider')
);
const ProductCard = dynamic(
  () => import('components/store-front/card/product-card/ProductCard')
);

const ProductContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { join } = useClass();
  const { current } = designState;
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;

  const showPagination =
    (item?.settings &&
      item.settings?.pagination &&
      item.settings.pagination !== 'disabled') ||
    !item?.settings ||
    !item.settings?.pagination;

  const displayList =
    item?.settings && item.settings?.screen && item.settings.screen == 'list';

  const CategoryHandler: Function = () => {
    let productGroup = {};
    if (
      item?.settings &&
      item.settings?.category &&
      item.settings.category !== 'all'
    ) {
      const { category } = item.settings;

      let selectedGroup = data.groups.find((item) => {
        return item.type === category;
      });
      productGroup = selectedGroup;
    } else {
      let selectedGroup = data.groups.find((item) => {
        return item.type === 'all';
      });
      productGroup = selectedGroup;
    }
    return productGroup;
  };

  const ShowbyHandler: Function = (group) => {
    let productsToShow = [];
    if (
      item?.settings &&
      item.settings?.showby &&
      item.settings.showby !== 'all'
    ) {
      productsToShow = group[item.settings.showby];
    } else {
      productsToShow = group.all;
    }
    return productsToShow;
  };

  const SyncWithColRow = (data) => {
    const col = item?.settings && item.settings?.cols ? item.settings.cols : 4;
    const row = item?.settings && item.settings?.rows ? item.settings.rows : 1;
    const calculateItems = col * row;
    const orderArr = data.slice(0, calculateItems);
    return orderArr;
  };

  let productGroup = CategoryHandler();
  let productsToshow = ShowbyHandler(productGroup);
  let productsOrdered = SyncWithColRow(productsToshow);

  const ProductList = () => {
    return (
      <div className="container mx-auto flex flex-col w-full  px-20px pb-25px">
        <ContainerTitle
          text={
            item?.settings && item.settings?.title
              ? item.settings.title
              : item.title
          }
          layout={layout}
          designState={designState}
          join={join}
        />
        <ProductGrid
          col={
            item?.settings && item.settings?.cols ? item.settings.cols : null
          }
          // row={
          //   item?.settings && item.settings?.rows ? item.settings.rows : null
          // }
        >
          {productsOrdered?.map((item, index) => (
            <ProductCard
              item={item}
              key={index}
              layout={layout}
              designState={designState}
            />
          ))}
        </ProductGrid>

        {showPagination && (
          <div className="flex justify-center w-full mt-20px">
            <Pagination
              className={`shadow-custom-1 rounded-7px `}
              layout={layout}
              designState={designState}
              total={productsOrdered.length}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        current.type == 'products' &&
        item.uuid == current.uuid
          ? true
          : false
      }
      className="my-25px"
      item={item}
      layout={layout}
    >
      {displayList ? (
        <ProductList />
      ) : (
        <ProductSlider
          data={productsToshow}
          item={item}
          layout={layout}
          designState={designState}
          col={item?.settings && item.settings?.cols ? item.settings.cols : 4}
          title={
            item?.settings && item.settings?.title
              ? item.settings.title
              : item.title
          }
        />
      )}
    </GeneralLayout>
  );
};

export default ProductContainer;
