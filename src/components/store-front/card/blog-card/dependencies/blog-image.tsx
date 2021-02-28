import { FC } from 'react';
export const BlogImage: FC<IBlogImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
  toggle,
}) => {
  const imgAlt = '/assets/images/themeImg.png';
  return (
    <img
      className={toggle(
        'blog-image h-294px ',
        `${className ? className : ''}`,
        layout
      )}
      onClick={onClick}
      src={src ? src : imgAlt}
      alt="عکس مقاله"
      style={style}
    />
  );
};
