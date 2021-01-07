import { Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useDesign } from 'hooks';
import {
  ButtonDrawer,
  Text,
  Input,
  StyleBoxBanner,
  HeaderDrawer,
  ButtonGroupDrawer,
} from 'components';
import { useService } from 'hooks';

export const BannerDashboard = () => {
  const { onSetItemProps, designState } = useDesign();
  const { onUpload } = useService();

  const handleUpload = async (value) => {
    const result = await onUpload(value);
    onSetItemProps({ key: 'images', value: [result.data.secure_url] });
  };

  const UploadButtonGroup = () => (
    <Fragment>
      <Text className="mt-30px mb-14px text-14px text-white_shade-100 text-right">
        تصویر 1
      </Text>
      <ButtonDrawer
        withUpload
        text="انتخاب تصویر"
        onUpload={(e) => handleUpload(e.target.files[0])}
      />
      <ButtonDrawer withLink link="Http:localhost" className="mt-14px" />
    </Fragment>
  );

  const StyleParts = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <Input
        className=" mb-30px"
        label="عنوان بخش"
        onBlur={(e) => onSetItemProps({ key: 'title', value: e.target.value })}
        placeholder={designState.current.title}
      />
      <StyleBoxBanner />
      <UploadButtonGroup />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات بنر تبلیغاتی" />
      <StyleParts />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
