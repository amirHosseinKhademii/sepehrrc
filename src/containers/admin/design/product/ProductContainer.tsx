import {
  BorderShadow,
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
    !item?.settings;
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

  let productGroup = CategoryHandler();
  let productsToshow = ShowbyHandler(productGroup);

  const ProductList = () => {
    return (
      <div
        className="container mx-auto p-20px flex flex-col w-full"
        style={{
          backgroundColor: `${
            item?.settings && item.settings?.backgroundColor
              ? item.settings.backgroundColor
              : '#fff'
          }`,
        }}
      >
        <ProductTitle text={item.title} />
        <ProductGrid
          col={
            item?.settings && item.settings?.cols ? item.settings.cols : null
          }
          row={
            item?.settings && item.settings?.rows ? item.settings.rows : null
          }
        >
          {productsToshow?.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </ProductGrid>

        {showPagination && (
          <div className="flex justify-center w-full my-20px">
            <Pagination />
          </div>
        )}
      </div>
    );
  };

  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        current.type == 'products' &&
        item.uuid == current.uuid
          ? true
          : false
      }
      backgroundUrl={item.backgroundImage}
      color={pageSettings.secondary}
      fontFamily={pageSettings.textFont}
    >
      <Display
        mobile={item?.settings && item.settings?.mobile}
        desktop={item?.settings && item.settings?.monitor}
      >
        {!displaySlide ? (
          <ProductList />
        ) : (
          <ProductSlider data={productsToshow} item={item} title={item.title} />
        )}
      </Display>
    </BorderShadow>
  );
};
