import { DrawerLayout } from 'components/admin/layouts';
import { useDesign } from 'hooks';
import { HeaderDrawer, ButtonGroupDrawer } from 'components';
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
  const { designState, setSetting, setPureImage } = useDesign();

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
      {designState.current.settings.imageSetting ? (
        <>
          <HeaderDrawer setting text="تنظیمات تصویر" />
          <ImageSettings />
          <ButtonGroupDrawer
            onCancel={() => setSetting({ imageSetting: false, number: -1 })}
          />
        </>
      ) : (
        <>
          <HeaderDrawer setting text="تنظیمات اسلایدر " />
          <BaseSettings />
          <ButtonGroupDrawer
            onCancel={() => setPureImage({ onUpload: false })}
          />
        </>
      )}
    </DrawerLayout>
  );
};
