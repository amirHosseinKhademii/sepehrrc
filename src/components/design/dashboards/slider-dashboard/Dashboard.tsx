import { useUi, useDirection } from 'hooks';
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

const SliderDashboard = () => {
  const { uiState } = useUi();
  const { language } = useDirection();
  const setting = uiState.setting;

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        {setting.type === 'dropZone' && setting.open ? (
          <DndUploadBox
            placeholder={{
              text: `${language.SDUplaodHere}`,
              width: 1326,
              height: 442,
            }}
          />
        ) : (
          <PictureContainer title={language.SDSliderImages} count={8} />
        )}
        <SpeedButtonGroup />
        <WidthButtonGroup />
        <EffectDrop />
        <ShowTypeButtonGroup />
        <GenericUploader
          label={language.SDbackgroundImage}
          text={language.SDChoose}
          isBackground
        />
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
      <HeaderDrawer setting text={language.SDImageSettings} />
      {uiState.setting.type === 'picture' && uiState.setting.open ? (
        <ImageSettings />
      ) : (
        <BaseSettings />
      )}
    </DrawerLayout>
  );
};

export default SliderDashboard;
