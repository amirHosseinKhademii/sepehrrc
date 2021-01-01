import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from 'components';
import { FC } from 'react';

interface IDrawer {
  children?: any;
}
export const DrawerSections: FC<IDrawer> = () => {
  return (
    <div className=" w-310px h-full absolute top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50">
      <HeaderDrawer />
      <div className="flex flex-col items-center px-20px pt-30px">
        <ButtonDrawer withSetting text="هدر - استایل ۱" className="mb-25px" />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer withSetting text="هدر - استایل ۱" />
      </div>
      <ButtonGroupDrawer />
    </div>
  );
};
