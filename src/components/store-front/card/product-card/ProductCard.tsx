import { FC } from 'react';
import {
  ProductImage,
  ProductName,
  ProductLayout,
  ProductPrice,
  ProductButton,
} from './dependencies';
import { useClass } from 'hooks';

const ProductCard: FC<IProductCard> = ({
  item,
  layout = true,
  designState,
}) => {
  const { toggle } = useClass();
  return (
    <ProductLayout className={`rounded-10px `} layout={layout} toggle={toggle}>
      <ProductImage
        src={item.cover}
        className="h-188px w-188px"
        toggle={toggle}
        layout={layout}
      />
      <ProductName
        text={item.name}
        className="text-18px mt-25px font-iransans"
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
        text="افزودن به سبد خرید"
        className="rounded-50px"
        layout={layout}
        toggle={toggle}
        designState={designState}
      />
    </ProductLayout>
  );
};

export default ProductCard;
