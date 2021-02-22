import { GeneralLink } from 'components';
import { FC } from 'react';
export const BlogLink: FC<IBlogLink> = ({
  children,
  className,
  layout,
  type,
}) => {
  return (
    <GeneralLink
      href={type === 'author' ? './' : './'}
      cssClass={type === 'author' ? 'blog-author-link' : 'blog-post-link'}
      layout={layout}
      className={className}
    >
      {children}
    </GeneralLink>
  );
};
