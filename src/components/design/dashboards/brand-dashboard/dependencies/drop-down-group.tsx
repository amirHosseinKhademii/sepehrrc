import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const DropDownGroup = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl } = useDirection();

  const ColDrop = () => (
    <div className="w-full col-span-2">
      <Text
        className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        تعداد ستون
      </Text>
      <DropDown
        className="w-full h-54px"
        options={[
          { id: '4', title: '4' },
          { id: '6', title: '6' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={
          designState.current.settings && designState.current.settings.cols
            ? designState.current.settings.cols
            : '4'
        }
      />
    </div>
  );

  return (
    <div className="w-full grid grid-cols-2 mb-25px">
      <ColDrop />
    </div>
  );
};
