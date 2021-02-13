import { FC } from 'react';
export const ProductImage: FC<IProductImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
  cssAlt,
  toggle,
}) => {
  const productAlt = '/assets/images/themeImg.png';
  return (
    <img
      className={toggle(
        'product-image h-107px w-155px object-contain',
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
      src={layout ? src : productAlt}
      alt="عکس محصول"
      style={style}
    />
  );
};
