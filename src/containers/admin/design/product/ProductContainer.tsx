import { useState, useEffect } from 'react';

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

export const ProductContainer = ({ items }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { current } = designState;
  const { pageSettings } = designState;
  const { settings } = designState.current;
  const showPagination = settings && settings?.page !== 'disabled';
  const displaySlide = current.settings?.screen == 'slider';

  const [productData, setproductData] = useState([]);

  const CategoryHandler: Function = (current) => {
    let productGroup = {};
    if (
      current?.settings &&
      current.settings?.category &&
      current.settings.category !== 'all'
    ) {
      const { category } = current.settings;

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

  const ShowbyHandler: Function = (current, group) => {
    let productsToShow = [];
    if (
      current?.settings &&
      current.settings?.showby &&
      current.settings.showby !== 'all'
    ) {
      productsToShow = group[current.settings.showby];
    } else {
      productsToShow = group.all;
    }
    return productsToShow;
  };

  useEffect(() => {
    let productGroup = CategoryHandler(current);
    let productsToshow = ShowbyHandler(current, productGroup);
    setproductData(productsToshow);
  }, [designState]);

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
          col={
            items?.settings && items.settings?.cols ? items.settings.cols : null
          }
          row={
            items.settings && items.settings?.rows ? items.settings.rows : null
          }
        >
          {productData?.map((item, index) => (
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
      color={pageSettings.secondary}
      fontFamily={pageSettings.textFont}
    >
      <Display
        mobile={settings && settings?.mobile}
        desktop={settings && settings?.monitor}
      >
        {!displaySlide ? (
          <ProductList />
        ) : (
          <ProductSlider items={productData} title={items.title} />
        )}
      </Display>
    </BorderShadow>
  );
};
