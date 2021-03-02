import { FC } from 'react';
import { useDirection } from 'hooks';

export const LabelBox: FC<ILabelBox> = ({ label, className }) => {
  const { textAlignRtl } = useDirection();
  return (
    <span
      className={`text-gray_shade-300 font-iransans text-14px ${className} pt-8px ${textAlignRtl} `}
    >
      {label}
    </span>
  );
};
