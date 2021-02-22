import { FC } from 'react';

export const BlogTitle: FC<IBlogTitle> = ({
  layout = true,
  className,
  onClick,
  style,
  cssClass,
  toggle,
  text,
}) => {
  return (
    <div
      style={{ direction: 'rtl' }}
      className={toggle(
        ` blog-title ${cssClass ? cssClass : ''} `,
        `${className ? className : ''}`,
        layout
      )}
    >
      {text}
      <style jsx>
        {`
          .blog-title {
            position: relative;
            height: 3.6em;
            line-height: 1.2em;
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
