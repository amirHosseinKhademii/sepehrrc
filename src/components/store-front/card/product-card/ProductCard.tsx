import { FC } from 'react';
import {
  ProductImage,
  ProductName,
  ProductLayout,
  ProductPrice,
  ProductButton,
} from './dependencies';
import { useClass, useDirection } from 'hooks';

const ProductCard: FC<IProductCard> = ({
  item,
  layout = true,
  designState,
}) => {
  const { toggle } = useClass();
  const { marginRtl, marginLtr } = useDirection();

  return (
    <ProductLayout className={`rounded-10px `} layout={layout} toggle={toggle}>
      <ProductImage
        src={item.cover}
        className=" w-188px"
        toggle={toggle}
        layout={layout}
      />
      <ProductName
        text={item.name}
        className=" overflow-hidden text-18px h-50px mt-10px
         "
        toggle={toggle}
        layout={layout}
      />
      <div className="flex">
        {item.prevPrice && (
          <ProductPrice
            prev
            text={item.price}
            className={` h-50px mt-10px ${marginLtr}-5px  overflow-hidden  text-lg font-bold  `}
            layout={layout}
            toggle={toggle}
            designState={designState}
          />
        )}

        <ProductPrice
          withUnit
          text={item.price}
          className="h-50px mt-10px overflow-hidden text-lg font-bold  "
          unitClassName={`text-sm font-bold ${marginRtl}-1 `}
          toggle={toggle}
          layout={layout}
          designState={designState}
        />
      </div>
      <ProductButton
        text="افزودن به سبد خرید"
        className="rounded-50px "
        layout={layout}
        toggle={toggle}
        designState={designState}
      />
    </ProductLayout>
  );
};

export default ProductCard;
