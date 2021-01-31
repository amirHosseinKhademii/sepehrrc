import { settings } from 'cluster';
import {
  Wrapper,
  Display,
  ProductTitle,
  ProductGrid,
  ProductCard,
  Pagination,
  ProductSlider,
} from 'components';
import { useDesign, useUi } from 'hooks';
import { data } from './data';

export const ProductContainer = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { current } = designState;
  const { pageSettings } = designState;

  const showPagination =
    (item?.settings &&
      item.settings?.page &&
      item.settings.page !== 'disabled') ||
    !item?.settings ||
    !item.settings?.page;

  const displaySlide =
    item?.settings && item.settings?.screen && item.settings.screen == 'slider';

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
            <ProductCard item={item} key={index} />
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
    <Wrapper
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
      <Display
        mobile={item?.settings && item.settings?.mobile}
        desktop={item?.settings && item.settings?.monitor}
      >
        {!displaySlide ? (
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
      </Display>
    </Wrapper>
  );
};
