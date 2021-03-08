import { FC } from 'react';
import { useDirection } from 'hooks';
export const BlogImage: FC<IBlogImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
  toggle,
}) => {
  const imgAlt = '/assets/images/default.png';
  const { rightTL } = useDirection();
  return (
    <>
      <img
        className={toggle(
          'blog-image',
          `${className ? className : ''}`,
          layout
        )}
        onClick={onClick}
        src={src ? src : imgAlt}
        alt="عکس مقاله"
        style={style}
      />
    </>
  );
};
