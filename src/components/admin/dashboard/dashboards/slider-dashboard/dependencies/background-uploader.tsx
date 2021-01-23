import { Text, ButtonDrawer } from 'components';
export const BackgroundUploader = () => (
  <div className="w-full">
    <Text className="  mt-30px text-14px text-white_shade-100 text-right">
      تصویر زمینه
    </Text>
    <ButtonDrawer withUpload text="انتخاب تصویر" className="mt-15px" />
  </div>
);
