import { DropDown, Text } from 'components';
import { useDesign } from 'hooks';
export const LanguageDrop = () => {
  const { designState } = useDesign();
  const { language } = designState.pageSettings;
  return (
    <div className="flex flex-col mt-25px  px-20px">
      <Text className="mb-15px text-14px text-white_shade-100 text-right">
        اتخاب زبان
      </Text>
      <DropDown
        className="w-full h-54px "
        options={[
          { id: 'farsi', title: `farsi` },
          { id: 'english', title: `englisi` },
        ]}
        // onSelect={(language) => onChangeLanguage({ value: language })}
        selected={language}
      />
    </div>
  );
};
