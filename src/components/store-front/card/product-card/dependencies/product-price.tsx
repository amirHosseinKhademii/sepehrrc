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
    color: `${prev ? pageSettings.primary : ''}`,
  };
  return (
    <div
      className={toggle(
        ` mt-10px  ${
          prev ? 'product-prev-price line-through ' : 'product-price'
        }`,
        className,
        layout,
        'text-14px '
      )}
      onClick={onClick}
      style={{ ...color, ...style }}
    >
      {text}
      {withUnit && (
        <span
          className={toggle(
            'product-price-unit',
            unitClassName,
            layout,
            unitClassNameAlt
          )}
        >
          {unit}
        </span>
      )}
      <style jsx>
        {`
          .product-price {
            color: ${layout ? '' : '#414655'};
          }
        `}
      </style>
    </div>
  );
};
