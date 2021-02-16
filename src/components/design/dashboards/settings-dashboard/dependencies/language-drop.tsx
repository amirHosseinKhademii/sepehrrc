import { DropDown, Text } from 'components';
import { useDesign, useDirection } from 'hooks';
export const LanguageDrop = () => {
  const { designState, onPageSetting } = useDesign();
  const { textAlignRtl } = useDirection();

  return (
    <div className="flex flex-col mt-25px  px-20px">
      <p className={`${textAlignRtl}  text-white_shade-100 pt-15px text-14px`}>
        انتخاب زبان
      </p>
      <DropDown
        className="w-full h-54px mt-20px "
        options={[
          { id: 'rtl', title: `فارسی` },
          { id: 'ltr', title: `English` },
        ]}
        onSelect={(value) => onPageSetting({ key: 'direction', value })}
        selected={
          designState.pageSettings && designState.pageSettings.direction
        }
      />
    </div>
  );
};
