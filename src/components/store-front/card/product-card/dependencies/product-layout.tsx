import { FC } from 'react';
import { useClass } from 'hooks';

export const ProductLayout: FC<IProductLayout> = ({
  layout = true,
  className,
  onClick,
  children,
  style,
}) => {
  const { toggle } = useClass();

  return (
    <div
      className={toggle('flex flex-col  items-center', className, layout)}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
