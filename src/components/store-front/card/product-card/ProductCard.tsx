import {
  ProductImage,
  ProductName,
  ProductLayout,
  ProductPrice,
  ProductButton,
} from './dependencies';
import { useClass, useDesign } from 'hooks';

export const ProductCard = ({ item, layout = true }) => {
  const { toggle } = useClass();
  const { designState } = useDesign();
  return (
    <ProductLayout
      className={' bg-white h-450px py-40px'}
      layout={layout}
      style={{ direction: 'rtl', borderRadius: '10px' }}
      toggle={toggle}
    >
      <ProductImage
        src={item.cover}
        className="h-188px w-188px object-contain"
        toggle={toggle}
        layout={layout}
      />
      <ProductName
        text={item.name}
        className="text-18px mt-25px"
        toggle={toggle}
        layout={layout}
      />
      <div className="flex">
        {item.prevPrice && (
          <ProductPrice
            prev
            text={item.price}
            className=" ml-5px mt-20px text-lg font-bold font-iransans  "
            layout={layout}
            toggle={toggle}
            designState={designState}
          />
        )}

        <ProductPrice
          withUnit
          text={item.price}
          className=" mt-20px text-lg font-bold font-iransans "
          unitClassName="text-sm font-bold mr-1 "
          toggle={toggle}
          layout={layout}
          designState={designState}
        />
      </div>
      <ProductButton
        text="افزون به سبد خرید"
        layout={layout}
        toggle={toggle}
        designState={designState}
      />
    </ProductLayout>
  );
};
