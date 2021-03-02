import { FC } from 'react';
import { ICUser } from 'icons';
export const BlogAuthor: FC<IBlogAuthor> = ({
  className,
  onClick,
  style,
  text,
  designState,
  layout,
}) => {
  const { pageSettings } = designState;
  return (
    <div className={`blog-author flex flex-row-reverse items-center`}>
      <span className={`blog-author__icon-box`}>
        <ICUser
          className={`blog-author__user-ic  text-16px ml-4px fill-current `}
        />
      </span>
      <span className={`blog-author__text`}>{text}</span>
    </div>
  );
};
