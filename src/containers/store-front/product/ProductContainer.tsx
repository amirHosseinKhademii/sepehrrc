import { settings } from 'cluster';
import {
  GeneralLayout,
  ProductTitle,
  ProductGrid,
  ProductCard,
  Pagination,
  ProductSlider,
} from 'components';
import { useDesign, useUi, useClass } from 'hooks';
import { data } from './data';

export const ProductContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { join } = useClass();
  const { current } = designState;

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
      <div className="container mx-auto flex flex-col w-full  px-20px py-25px">
        <ProductTitle
          text={
            item?.settings && item.settings?.title
              ? item.settings.title
              : item.title
          }
          layout={true}
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
            <ProductCard item={item} key={index} layout={true} />
          ))}
        </ProductGrid>

        {showPagination && (
          <div className="flex justify-center w-full mt-20px">
            <Pagination />
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
    >
      {displayList ? (
        <ProductList />
      ) : (
        <ProductSlider
          data={productsToshow}
          item={item}
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
