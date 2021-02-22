import { FC } from 'react';
export const BlogImage: FC<IBlogImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
  toggle,
}) => {
  const productAlt = '/assets/images/themeImg.png';
  return (
    <img
      className={toggle(
        'blog-image h-238px ',
        `${className ? className : ''}`,
        layout
      )}
      onClick={onClick}
      src={layout ? src : productAlt}
      alt="عکس مقاله"
      style={style}
    />
  );
};
