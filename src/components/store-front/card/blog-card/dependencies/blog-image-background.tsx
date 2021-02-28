import { FC } from 'react';
import { BlogImage } from './blog-image';
import { useDirection } from 'hooks';
export const BlogImageBackground: FC<IBlogImageBackground> = ({
  children,
  layout,
  imgSrc,
  className,
  cssClass,
  style,
  toggle,
}) => {
  const imgAlt = '/assets/images/themeImg.png';
  const { textAlignRtl } = useDirection();
  if (layout) {
    return (
      <div
        className={toggle(
          `blog-image-background ${
            cssClass ? cssClass : ''
          } p-30px ${textAlignRtl} `,
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
      <div className={`blog-image bg-white ${textAlignRtl}`}>
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
