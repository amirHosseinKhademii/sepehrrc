import { Text } from 'components';
import { useDirection } from 'hooks';
import { FC } from 'react';

export const Label: FC<{ className?: string }> = ({ children, className }) => {
  const { textAlignRtl } = useDirection();
  return (
    <Text
      className={` text-14px text-white_shade-100 ${textAlignRtl} ${className} w-full`}
    >
      {children}
    </Text>
  );
};
