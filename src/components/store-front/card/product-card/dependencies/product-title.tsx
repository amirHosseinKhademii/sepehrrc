import { FC } from 'react';
import { useClass, useDesign } from 'hooks';

export const ProductTitle: FC<IProductTitle> = ({
  text,
  className,
  join,
  designState,
}) => {
  const { pageSettings } = designState;

  return (
    <div
      className={join(
        `productTitle font-${pageSettings.titleFont} text-center text-32px font-medium  mb-40px`,
        className
      )}
    >
      {text}
    </div>
  );
};
