import { HeaderDrawer, DrawerLayout } from 'components';
import { DropDownGroup } from './dependencies';
import { useDesign } from 'hooks';
import {
  BackgroundColor,
  TitleInput,
  ResponsiveSwitchs,
  GenericUploader,
  PictureContainer,
  DndUploadBox,
} from '../common';

const BrandDashboard = () => {
  const { designState } = useDesign();

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <TitleInput />
        <DropDownGroup />
        {designState.pureImage.onUpload ? (
          <DndUploadBox
            placeholder={{
              text: 'تصاویر لوگو را اینجا آپلود کنید',
              width: 121,
              height: 54,
            }}
            marginTop="25px"
          />
        ) : (
          <PictureContainer
            title="تصاویر لوگو ها"
            count={24}
            marginTop="25px"
          />
        )}
        <GenericUploader
          text="انتخاب کنید"
          className="mt-30px"
          isBackground
          withSwitch
        />
        <BackgroundColor withSwitch className="mt-30px" />
        <ResponsiveSwitchs />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text=" تنظیمات لوگو مشتریان " />
      <BaseSettings />
    </DrawerLayout>
  );
};

export default BrandDashboard;
