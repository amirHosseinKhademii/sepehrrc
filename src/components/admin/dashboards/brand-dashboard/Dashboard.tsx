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

export const BrandDashboard = () => {
  const { designState } = useDesign();

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <TitleInput />
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
        <DropDownGroup />
        <GenericUploader label="تصویر زمینه" text="انتخاب کنید" isBackground />
        <BackgroundColor />
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
