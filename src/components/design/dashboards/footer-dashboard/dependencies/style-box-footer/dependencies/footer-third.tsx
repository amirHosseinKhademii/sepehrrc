import { useClass } from 'hooks';
import { FC, memo } from 'react';
import { ICFooterThird } from 'icons';
const FooterThird: FC<IStyleBox> = memo(
  ({ className, onClick, active = false }) => {
    const { join } = useClass();
    return (
      <ICFooterThird
        fill={active ? '#1578e6' : '#2e323d'}
        fillSecondary={active ? '#36a7ff' : '#636c81'}
        stroke={active ? '#36a7ff' : '#636c81'}
        strokeSecondary={active ? '#1577e6' : '#2e323d'}
        onClick={onClick}
        className={className}
      />
    );
  }
);
export default FooterThird;
