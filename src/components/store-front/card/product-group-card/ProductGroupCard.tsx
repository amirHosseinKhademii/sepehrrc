import { FC } from 'react';
import { useClass, useDirection } from 'hooks';
import { ProductGroupLayout } from './dependencies';

const ProductGroupCard: FC<IProductGroupCard> = ({
  layout = true,
  designState,
  imgUrl,
  title,
}) => {
  const { toggle } = useClass();
  const { marginRtl, marginLtr } = useDirection();
  return (
    <ProductGroupLayout
      className="rounded pt-20px"
      layout={layout}
      toggle={toggle}
    >
      <img src={imgUrl} className="h-200px w-full rounded object-contain" />
      <div
        className={`h-full flex justify-center items-center text-14px text-gray_shade-800  ${
          layout ? '' : 'font-light'
        }`}
      >
        <span>{layout ? title : 'عنوان گروه کالا در اینجا'}</span>
      </div>
    </ProductGroupLayout>
  );
};
export default ProductGroupCard;
