import { FC } from 'react';
import { useClass, useDirection } from 'hooks';
import { ProductGroupLayout } from './dependencies';
const imagePlaceholder = '/assets/images/ThemeImg.png';

const ProductGroupCard: FC<IProductGroupCard> = ({
  layout = true,
  designState,
  imgUrl,
  title,
}) => {
  const { toggle } = useClass();
  const { marginRtl, marginLtr } = useDirection();
  return (
    <ProductGroupLayout className="rounded" layout={layout} toggle={toggle}>
      {layout ? (
        <>
          <img src={imgUrl} className="h-238px w-full rounded" />
          <div className="text-14px text-gray_shade-800 h-full flex justify-center items-center ">
            {title}
          </div>
        </>
      ) : (
        <>
          <img src={imagePlaceholder} className="h-105px w-148px" />
          <span className="text-14px font-light text-gray_shade-800 mt-35px">
            عنوان گروه کالا در اینجا
          </span>
        </>
      )}
    </ProductGroupLayout>
  );
};
export default ProductGroupCard;
