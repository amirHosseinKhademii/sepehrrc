import { ProductButton, Price } from 'components';
import { ProductImage, ProductName, ProductLayout } from './dependencies';

import { useDesign, useUi } from 'hooks';

export const ProductCard = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  return (
    <ProductLayout
      className={
        ' bg-white border-2 border-gray-100 shadow-lg rounded-xl  p-40px'
      }
      style={{ direction: 'rtl' }}
    >
      <ProductImage
        src={item.cover}
        className=" h-188px w-188px object-cover"
      />
      <ProductName text={item.name} className="text-18px mt-20px" />
      <div className="flex">
        {item.prevPrice && (
          <Price
            prev
            text={item.price}
            className=" ml-5px mt-20px text-lg font-bold text-red-600 "
          />
        )}

        <Price
          withUnit
          text={item.price}
          className=" mt-20px text-lg font-bold "
          unitClassName="text-sm font-bold mr-1 font-iransans"
        />
      </div>
      <ProductButton text="افزون به سبد خرید" />
    </ProductLayout>
  );
};
