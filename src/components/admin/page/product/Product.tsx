import { BorderShadow, PureButton } from 'components';
import {
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
} from './dependencies';
import { useDesign, useUi } from 'hooks';

export const Product = ({ item }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        designState.current.type == 'product' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
    >
      <ProductCard
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
            <ProductPrice
              prev
              text={item.price}
              className=" ml-5px mt-20px text-lg font-bold text-red-600 "
            />
          )}

          <ProductPrice
            withUnit
            text={item.price}
            className=" mt-20px text-lg font-bold "
            unitClassName="text-sm font-bold mr-1 font-iransans"
          />
        </div>
        <PureButton
          className="  p-14px  focus:outline-none mt-9 rounded-50px border-2 border-red-500 text-red-500 text-14px"
          text="افزون به سبد خرید"
        />
      </ProductCard>
    </BorderShadow>
  );
};
