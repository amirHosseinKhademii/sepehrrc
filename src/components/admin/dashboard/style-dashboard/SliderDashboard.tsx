import { FC } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import {
  HeaderDrawer,
  ButtonGroupDrawer,
  ButtonGroup,
  Text,
  Switch,
  DropDown,
  ButtonDrawer,
} from 'components';
import { ICPlus } from 'icons';

export const SliderDashboard = () => {
  const { join, toggle } = useClass();
  const { designState, setProps, setPureImage, setSetting } = useDesign();
  const { settings } = designState.current;

  const StyleParts = () => {
    const SettingButton = ({ text, active, className, onClick }) => (
      <button
        className={toggle(
          'h-54px focus:outline-none',
          `bg-primary-700 text-white_shade-100 text-14px ${className}`,
          active,
          ` bg-gray_shade-800 text-gray-300 text-14px ${className}`
        )}
        onClick={onClick}
      >
        {text}
      </button>
    );

    const PictureButton: FC<{
      withPicture?: boolean;
      withAdd?: boolean;
      picture?: any;
    }> = ({ withPicture, withAdd, picture }) => {
      if (withAdd)
        return (
          <div className="w-full h-full flex justify-center items-center rounded bg-gray_shade-800 cursor-pointer ">
            <ICPlus fill="#fff" />
          </div>
        );
      else if (withPicture)
        return <img className="w-60px h-60px rounded  " src={picture} />;
      else
        return (
          <div className="w-full h-full rounded bg-gray_shade-800 opacity-30"></div>
        );
    };

    const PictureContainer = () => (
      <div className="w-full felx flex-col  ">
        <Text className=" mb-6px text-14px text-white_shade-100 text-right">
          تصاویر اسلایدر
        </Text>
        <div className="w-full h-130px grid grid-cols-4 grid-rows-2 gap-10px">
          <PictureButton />
          <PictureButton />
          <PictureButton />
          <PictureButton withAdd />
          <PictureButton />
          <PictureButton />
          <PictureButton />
          <PictureButton />
        </div>
      </div>
    );

    const SpeedButtonGroup = () => {
      return (
        <ButtonGroup
          label="سرعت اسلاید ها"
          groupClass="grid grid-cols-3"
          className="mt-30px"
        >
          <SettingButton
            text="سریع"
            active={settings && settings.speed && settings.speed == 'fast'}
            className=" rounded-l"
            onClick={() => setSetting({ speed: 'fast' })}
          />
          <SettingButton
            text="آرام"
            active={settings && settings.speed && settings.speed == 'slow'}
            className=" border-r border-l border-gray_shade-900"
            onClick={() => setSetting({ speed: 'slow' })}
          />
          <SettingButton
            text="متوسط"
            active={settings && settings.speed && settings.speed == 'normal'}
            className="rounded-r"
            onClick={() => setSetting({ speed: 'normal' })}
          />
        </ButtonGroup>
      );
    };

    const WidthButtonGroup = () => (
      <ButtonGroup
        label="عرض اسلایدر "
        groupClass="grid grid-cols-2"
        className="mt-30px"
      >
        <SettingButton
          text="تمام صفحه"
          active={settings && settings.screen && settings.screen == 'full'}
          className=" rounded-l border-r border-gray_shade-900"
          onClick={() => setSetting({ screen: 'full' })}
        />
        <SettingButton
          text=" ساده"
          active={settings && settings.screen && settings.screen == 'simple'}
          className="rounded-r"
          onClick={() => setSetting({ screen: 'simple' })}
        />
      </ButtonGroup>
    );

    const EffectDrop = () => (
      <div className="w-full">
        <Text className="  mt-30px text-14px text-white_shade-100 text-right">
          افکت تعویض اسلایدرها
        </Text>
        <DropDown
          className="w-full h-54px mt-15px"
          options={[
            { id: 'fade', title: 'محو شونده' },
            { id: 'simple', title: 'ساده' },
          ]}
          onSelect={(effect) => setSetting({ effect })}
          selected={settings && settings.effect}
        />
      </div>
    );

    const ShowTypeButtonGroup = () => (
      <ButtonGroup
        label="  حالت نمایش قبلی / بعدی"
        groupClass="grid grid-cols-3"
        className="mt-30px"
      >
        <SettingButton
          text="..."
          active={settings && settings.button && settings.button == 'first'}
          className=" rounded-l "
          onClick={() => setSetting({ button: 'first' })}
        />
        <SettingButton
          text="< >"
          active={settings && settings.button && settings.button == 'second'}
          className=" border-r border-l border-gray_shade-900"
          onClick={() => setSetting({ button: 'second' })}
        />
        <SettingButton
          text="<...>"
          active={settings && settings.button && settings.button == 'third'}
          className="rounded-r"
          onClick={() => setSetting({ button: 'third' })}
        />
      </ButtonGroup>
    );

    const BackgroundUploader = () => (
      <div className="w-full">
        <Text className="  mt-30px text-14px text-white_shade-100 text-right">
          تصویر زمینه
        </Text>
        <ButtonDrawer withUpload text="انتخاب تصویر" className="mt-15px" />
      </div>
    );

    const MobileSwitch = () => {
      return (
        <Switch
          label="نمایش فقط در موبایل"
          className=" mt-35px"
          onClick={() =>
            setSetting({
              mobile: settings && settings.mobile ? !settings.mobile : true,
            })
          }
          checked={settings && settings.mobile && settings.mobile === true}
        />
      );
    };

    const MonitorSwitch = () => {
      return (
        <Switch
          label="نمایش فقط در مانیتور"
          className=" mt-10px mb-116px"
          onClick={() =>
            setSetting({
              monitor: settings && settings.monitor ? !settings.monitor : true,
            })
          }
          checked={settings && settings.monitor && settings.monitor === true}
        />
      );
    };

    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <PictureContainer />
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
      <HeaderDrawer setting text="تنظیمات اسلایدر " />
      <StyleParts />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
