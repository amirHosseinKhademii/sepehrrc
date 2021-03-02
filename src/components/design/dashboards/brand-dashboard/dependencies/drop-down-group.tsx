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
        نمایش بر اساس
      </Text>
      <DropDown
        className="w-full h-54px"
        options={[
          { id: 'random', title: 'تصادفی' },
          { id: 'history', title: 'تاریخ آپلود' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={
          designState.current.settings && designState.current.settings.cols
            ? designState.current.settings.cols
            : 'random'
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
