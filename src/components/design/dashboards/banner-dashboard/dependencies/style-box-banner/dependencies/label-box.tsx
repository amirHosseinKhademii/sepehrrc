import { useDirection } from 'hooks';
export const LabelBox = ({ label }) => {
  const { textAlignRtl } = useDirection();
  return (
    <span className={`text-gray_shade-300  text-14px pt-8px ${textAlignRtl}`}>
      {label}
    </span>
  );
};
