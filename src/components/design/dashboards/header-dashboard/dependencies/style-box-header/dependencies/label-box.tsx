import { useDirection } from 'hooks';
export const LabelBox = ({ label }) => {
  const { textAlignRtl } = useDirection();
  return (
    <div
      className={`mb-10px w-full text-gray_shade-300 text-14px  ${textAlignRtl} `}
    >
      {label}
    </div>
  );
};
