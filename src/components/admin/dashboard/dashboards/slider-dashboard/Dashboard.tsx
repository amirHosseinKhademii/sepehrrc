import { DrawerLayout } from 'components/admin/layouts';
import { useDesign, useUi } from 'hooks';
import { HeaderDrawer } from 'components';
import {
  ResponsiveSwitchs,
  GenericUploader,
  PictureContainer,
  DndUploadBox,
} from '../common';
import {
  SpeedButtonGroup,
  WidthButtonGroup,
  EffectDrop,
  ShowTypeButtonGroup,
  ImageBox,
  InputBox,
} from './dependencies';

export const SliderDashboard = () => {
  const { designState } = useDesign();
  const { uiState } = useUi();

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        {designState.pureImage.onUpload ? (
          <DndUploadBox
            placeholder={{
              text: 'تصاویر اسلایدر را اینجا آپلود کنید',
              width: 1326,
              height: 442,
            }}
          />
        ) : (
          <PictureContainer title="تصاویر اسلایدر" count={8} />
        )}
        <SpeedButtonGroup />
        <WidthButtonGroup />
        <EffectDrop />
        <ShowTypeButtonGroup />
        <GenericUploader label="تصویر زمینه" text="انتخاب کنید" isBackground />
        <ResponsiveSwitchs />
      </div>
    );
  };

  const ImageSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <ImageBox />
        <InputBox />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات تصویر" />
      {uiState.setting.type === 'picture' && uiState.setting.open ? (
        <ImageSettings />
      ) : (
        <BaseSettings />
      )}
    </DrawerLayout>
  );
};
