import { ButtonDrawer, Text } from 'components';
import { useDesign } from 'hooks';

export const ImageUploader = () => {
  const { setPureImage } = useDesign();

  return (
    <div className="w-full mt-30px ">
      <Text className="  text-14px text-white_shade-100 text-right">
        تصویر زمینه
      </Text>
      <ButtonDrawer
        withUpload
        text="انتخاب تصویر"
        className="mt-15px"
        onUpload={(value) => setPureImage({ value, number: 'one' })}
      />
    </div>
  );
};
