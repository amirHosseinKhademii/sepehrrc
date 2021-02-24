import { FC } from 'react';
import { BlogImage } from './blog-image';
export const BlogImageBackground: FC<IBlogImageBackground> = ({
  children,
  layout,
  imgSrc,
  className,
  style,
  toggle,
}) => {
  const imgAlt = '/assets/images/themeImg.png';

  if (layout) {
    return (
      <div
        className={toggle(
          `blog-image-background p-30px `,
          className ? className : '',
          layout
        )}
      >
        {children}
        <style jsx>
          {`
            .blog-image-background {
              background-image: url(${imgSrc ? imgSrc : ''});
              background-size: cover;
              background-position: center center;
            }
          `}
        </style>
      </div>
    );
  } else {
    return (
      <div className={`blog-image bg-white `}>
        <BlogImage
          layout={layout}
          toggle={toggle}
          src={imgSrc ? imgSrc : imgAlt}
        />
        <div className="p-30px">{children}</div>
      </div>
    );
  }
};
