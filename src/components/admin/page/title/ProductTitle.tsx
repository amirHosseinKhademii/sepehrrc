import { FC } from 'react';
import { useClass } from 'hooks';
interface IProductTitle {
  text: string;
  className?: string;
}

export const ProductTitle: FC<IProductTitle> = ({ text, className }) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        'text-center text-4xl font-medium mt-16 mb-12',
        className
      )}
    >
      {text}
    </div>
  );
};
