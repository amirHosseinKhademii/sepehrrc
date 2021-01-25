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

export const ProductContainer = ({ items }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { current } = designState;
  const { settings } = designState.current;
  const showPagination = settings && settings?.page !== 'disabled';

  const displaySlide = current.settings?.screen == 'slider';
  const ProductList = () => {
    return (
      <div
        className="container mx-auto p-20px flex flex-col w-full"
        style={{
          backgroundColor: `${
            settings?.backgroundColor ? settings.backgroundColor : '#fff'
          }`,
        }}
      >
        <ProductTitle text={items.title} />
        <ProductGrid
          col={!!items.settings.cols ? items.settings.cols : null}
          row={!!items.settings.rows ? items.settings.rows : null}
        >
          {items.groups[0].groupItems.map((item, index) => (
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
        items.uuid == current.uuid
          ? true
          : false
      }
    >
      <Display
        mobile={settings && settings?.mobile}
        desktop={settings && settings?.monitor}
      >
        {!displaySlide ? <ProductList /> : <ProductSlider items={items} />}
      </Display>
    </BorderShadow>
  );
};
