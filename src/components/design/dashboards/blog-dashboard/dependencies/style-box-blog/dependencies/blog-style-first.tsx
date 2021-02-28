import { useClass } from 'hooks';
import { FC, memo } from 'react';
import { ICBlogStyleFirst } from 'icons';
const BlogStyleFirst: FC<IStyleBox> = memo(({ className, onClick, active }) => {
  const { join } = useClass();
  return (
    <ICBlogStyleFirst fill={active ? '#1578e6' : '#2e323d'} onClick={onClick} />
  );
});
export default BlogStyleFirst;
