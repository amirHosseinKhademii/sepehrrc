import { FC } from 'react';

export const BlogImageBackground: FC<IBlogImageBackground> = ({
  children,
  layout,
  imgSrc,
  className,
  style,
  toggle,
}) => {
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
};
