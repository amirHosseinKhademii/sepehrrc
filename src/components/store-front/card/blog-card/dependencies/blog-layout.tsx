import { FC } from 'react';
import { useDirection } from 'hooks';
import { BlogLink } from './blog-link';
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
    <BlogLink layout={layout} type="post">
      <div
        onClick={onClick}
        style={style}
        className={toggle(
          `blog  overflow-hidden ${cssClass ? cssClass : ''} ${textAlignRtl}`,
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
    </BlogLink>
  );
};
