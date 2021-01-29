import { FC } from 'react';
import { Text } from 'components';
import { useClass } from 'hooks';

export const ButtonGroup: FC<IButton> = ({
  label,
  className,
  children,
  groupClass = 'flex',
}) => {
  const { join } = useClass();
  return (
    <div className={join('w-full', className)}>
      <Text className=" mb-14px text-14px text-white_shade-100 text-right">
        {label}
      </Text>
      <div className={groupClass}>{children}</div>
    </div>
  );
};
