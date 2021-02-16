import { DropDown, Text } from 'components';
import { useDesign } from 'hooks';
export const LanguageDrop = () => {
  const { designState, onPageSetting } = useDesign();

  return (
    <div className="flex flex-col mt-25px  px-20px">
      <Text className="mb-15px text-14px text-white_shade-100 text-right">
        اتخاب زبان
      </Text>
      <DropDown
        className="w-full h-54px "
        options={[
          { id: 'farsi', title: `فارسی` },
          { id: 'english', title: `English` },
        ]}
        onSelect={(value) => onPageSetting({ key: 'language', value })}
        selected={designState.pageSettings && designState.pageSettings.language}
      />
    </div>
  );
};
