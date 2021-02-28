import { useClass } from 'hooks';
import { FC, memo } from 'react';
import { ICBlogStyleSecond } from 'icons';
const BlogStyleSecond: FC<IStyleBox> = memo(
  ({ className, onClick, active = false }) => {
    const { join } = useClass();
    return (
      <ICBlogStyleSecond
        fill={active ? '#1578e6' : '#2e323d'}
        onClick={onClick}
      />
    );
  }
);
export default BlogStyleSecond;
