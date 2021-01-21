import { ButtonDrawer, Text } from 'components';

export const ImageUploader = () => {
  return (
    <div className="w-full">
      <Text className="  text-14px text-white_shade-100 text-right">
        تصویر زمینه
      </Text>
      <ButtonDrawer withUpload text="انتخاب تصویر" className="mt-15px" />
    </div>
  );
};
