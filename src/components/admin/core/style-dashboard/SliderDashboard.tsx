import { FC, Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import { HeaderDrawer, ButtonGroupDrawer, ButtonGroup, Text } from 'components';
import { DropDown } from '../drop-down';
import { ButtonDrawer } from '../drawer';
import { Switch } from '../switch';
import { ICPlus } from 'icons';

export const SliderDashboard = () => {
  const { join, toggle } = useClass();
  const { designState, setProps, setPureImage } = useDesign();

  const StyleParts = () => {
    const SettingButton = ({ text, active, className }) => (
      <button
        className={toggle(
          'h-54px',
          `bg-primary-700 text-white_shade-100 text-14px ${className}`,
          active,
          ` bg-gray_shade-800 text-gray-300 text-14px ${className}`
        )}
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
        <div className="w-full h-140px grid grid-cols-4 grid-rows-2 gap-10px">
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

    const SpeedButtonGroup = () => (
      <ButtonGroup
        label="سرعت اسلاید ها"
        groupClass="grid grid-cols-3"
        className="mt-30px"
      >
        <SettingButton text="سریع" active={false} className=" rounded-l" />
        <SettingButton
          text="آرام"
          active
          className=" border-r border-l border-gray_shade-900"
        />
        <SettingButton text="متوسط" active={false} className="rounded-r" />
      </ButtonGroup>
    );

    const WidthButtonGroup = () => (
      <ButtonGroup
        label="عرض اسلایدر "
        groupClass="grid grid-cols-2"
        className="mt-30px"
      >
        <SettingButton
          text="تمام صفحه"
          active={false}
          className=" rounded-l border-r border-gray_shade-900"
        />
        <SettingButton text=" ساده" active className="rounded-r" />
      </ButtonGroup>
    );

    const EffectDrop = () => (
      <div className="w-full">
        <Text className="  mt-30px text-14px text-white_shade-100 text-right">
          افکت تعویض اسلایدرها
        </Text>
        <DropDown className="w-full h-54px mt-15px" options={[]} />
      </div>
    );

    const ShowTypeButtonGroup = () => (
      <ButtonGroup
        label="  حالت نمایش قبلی / بعدی"
        groupClass="grid grid-cols-3"
        className="mt-30px"
      >
        <SettingButton text="..." active={false} className=" rounded-l " />
        <SettingButton
          text="< >"
          active={false}
          className=" border-r border-l border-gray_shade-900"
        />
        <SettingButton text="<...>" active={false} className="rounded-r" />
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

    const MobileSwitch = () => (
      <Switch label="نمایش فقط در موبایل" className=" mt-35px mb-116px" />
    );

    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <PictureContainer />
        <SpeedButtonGroup />
        <WidthButtonGroup />
        <EffectDrop />
        <ShowTypeButtonGroup />
        <BackgroundUploader />
        <MobileSwitch />
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
