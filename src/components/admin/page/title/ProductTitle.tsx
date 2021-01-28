import { FC } from 'react';
import { useClass, useDesign } from 'hooks';
interface IProductTitle {
  text: string;
  className?: string;
}

export const ProductTitle: FC<IProductTitle> = ({ text, className }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  const { join } = useClass();
  return (
    <div
      className={join(
        `font-${pageSettings.titleFont} text-center text-32px font-medium  mb-40px`,
        className
      )}
    >
      {text}
    </div>
  );
};
