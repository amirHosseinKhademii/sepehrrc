import { FC } from 'react';
import { useDirection } from 'hooks';
export const BlogLayout: FC<IBlogLayout> = ({
  layout,
  cssClass,
  className,
  toggle,
  children,
  onClick,
  style,
  imgSrc,
  modern = false,
}) => {
  const { textAlignRtl } = useDirection();
  return (
    <div
      onClick={onClick}
      style={style}
      className={toggle(
        `blog  ${cssClass ? cssClass : ''} ${textAlignRtl}`,
        className,
        layout
      )}
    >
      {children}
      <style jsx>
        {`
          .blog {
            color: ${layout && modern ? '#fff' : ''};
            background-image: url(${imgSrc && layout ? imgSrc : ''});
            background-size: cover;
            background-position: center center;
          }
        `}
      </style>
    </div>
  );
};
