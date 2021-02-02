import { FC } from 'react';
import { useClass, useDesign } from 'hooks';

export const ProductPrice: FC<IProductPrice> = ({
  layout = true,
  className,
  cssAlt,
  onClick,
  style,
  unitClassName,
  unitClassNameAlt,
  unit = 'تومان',
  prev,
  withUnit,
  text,
  designState,
  toggle,
}) => {
  const { pageSettings } = designState;
  let color = {
    color: `${prev ? pageSettings.primary : 'inherit'}`,
  };
  return (
    <div
      className={toggle(
        `${prev ? 'productPrevPrice line-through ' : 'productPrice'}`,
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
      style={{ ...color, ...style }}
    >
      {text}
      {withUnit && (
        <span
          className={toggle(
            'productPriceUnit',
            unitClassName,
            layout,
            unitClassNameAlt
          )}
        >
          {unit}
        </span>
      )}
    </div>
  );
};
