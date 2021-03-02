import { FC } from 'react';
import { useDirection } from 'hooks';
export const BlogTitle: FC<IBlogTitle> = ({
  layout = true,
  className,
  onClick,
  style,
  cssClass,
  toggle,
  text,
}) => {
  const { textAlignRtl } = useDirection();
  return (
    <div
      className={toggle(
        ` blog-title mb-20px ${textAlignRtl}  ${cssClass ? cssClass : ''} `,
        `${className ? className : ''}`,
        layout
      )}
    >
      {text}
      <style jsx>
        {`
          .blog-title {
            position: relative;
            height: 6em;
            line-height: 2;
            overflow: hidden;
          }

          // .blog-title:after {
          //   content: '';
          //   text-align: right;
          //   position: absolute;
          //   bottom: 0;
          //   left: 0;
          //   width: 30%;
          //   height: 1.2em;
          //   background: linear-gradient(
          //     to left,
          //     rgba(255, 255, 255, 0),
          //     rgba(255, 255, 255, 0.1) 50%
          //   );
          // }
        `}
      </style>
    </div>
  );
};
