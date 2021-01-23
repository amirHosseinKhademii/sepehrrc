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
} from './dependencies';
import { ImageSettings } from './image-dashboard';

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

  return (
    <DrawerLayout>
      {designState.current.settings.imageSetting ? (
        <>
          <HeaderDrawer setting text="تنظیمات تصویر" />
          <ImageSettings />
          <ButtonGroupDrawer
            onCancel={() => setSetting({ imageSetting: false })}
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
