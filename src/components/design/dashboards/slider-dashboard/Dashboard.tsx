import { useDesign, useUi } from 'hooks';
import { HeaderDrawer, DrawerLayout } from 'components';
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
  const setting = uiState.setting;

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        {setting.type === 'dropZone' && setting.open ? (
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
