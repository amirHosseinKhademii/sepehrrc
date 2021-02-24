import { FC } from 'react';
import { useDirection } from 'hooks';
export const BlogAbstract: FC<IBlogAbstract> = ({ text, toggle, layout }) => {
  const { textAlignRtl } = useDirection();

  return (
    <div
      className={`blog-abstract ${textAlignRtl} text-14px mb-20px h-90px overflow-ellipsis overflow-hidden leading-loose`}
    >
      {text}
      <style jsx>{`
        .blog-abstract {
          position: relative;
          height: 3.6em;
          overflow: hidden;
        }

        // .blog-abstract:after {
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
      `}</style>
    </div>
  );
};
