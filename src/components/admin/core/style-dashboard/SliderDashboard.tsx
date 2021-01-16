import { FC, Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import { HeaderDrawer, ButtonGroupDrawer, ButtonGroup, Text } from 'components';
import { DropDown } from '../drop-down';
import { ButtonDrawer } from '../drawer';
import { Switch } from '../switch';

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
      <Switch label="نمایش فقط در موبایل" className=" mt-35px" />
    );

    return (
      <div className="flex flex-col items-end pt-30px px-20px">
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
