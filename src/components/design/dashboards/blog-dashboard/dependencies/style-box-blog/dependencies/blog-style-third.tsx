import { useClass } from 'hooks';
import { FC, memo } from 'react';
import { ICBLogStyleThird } from 'icons';
const BlogStyleThird: FC<IStyleBox> = memo(
  ({ className, onClick, active = false }) => {
    const { join } = useClass();
    return (
      <ICBLogStyleThird
        fill={active ? '#1578e6' : '#2e323d'}
        fillSecondary={active ? '#36a7ff' : '#636c81'}
        stroke={active ? '#36a7ff' : '#636c81'}
        onClick={onClick}
        className={className}
      />
    );
  }
);
export default BlogStyleThird;
