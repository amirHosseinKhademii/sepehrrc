import { DrawerLayout } from 'components/admin/layouts';
import { useDesign } from 'hooks';
import { HeaderDrawer, ButtonGroupDrawer } from 'components';
import {
  DndUploadBox,
  SpeedButtonGroup,
  WidthButtonGroup,
  EffectDrop,
  ShowTypeButtonGroup,
  BackgroundUploader,
  MobileSwitch,
  MonitorSwitch,
  PictureContainer,
  ImageBox,
  InputBox,
} from './dependencies';

export const SliderDashboard = () => {
  const { designState, setSetting } = useDesign();

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        {designState.pureImage.onUpload ? (
          <DndUploadBox />
        ) : (
          <PictureContainer />
        )}
        <SpeedButtonGroup />
        <WidthButtonGroup />
        <EffectDrop />
        <ShowTypeButtonGroup />
        <BackgroundUploader />
        <MobileSwitch />
        <MonitorSwitch />
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
          <ButtonGroupDrawer />
        </>
      )}
    </DrawerLayout>
  );
};
